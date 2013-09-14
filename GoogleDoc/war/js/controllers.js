'use strict';

function UserCtrl($scope, backend) {
	$scope.user = null;
	$scope.login = function() {
		backend.user().then(function(response) {
			$scope.user = response.data;
		});
	}
	$scope.login();
}

function EditorCtrl($scope, $location, $routeParams, $timeout, editor, doc,
		autosaver) {
	console.log($routeParams);
	$scope.editor = editor;
	$scope.doc = doc;
	$scope.$on('saved', function(event) {
		$location.path('/edit/' + doc.resource_id);
	});
	if ($routeParams.id) {
		editor.load($routeParams.id);
	} else {
		// New doc, but defer to next event cycle to ensure init
		$timeout(function() {
			editor.create($routeParams.folderId);
		}, 1);
	}
}

function ShareCtrl($scope, appId, doc) {
	var client = new gapi.drive.share.ShareClient(appId);
	$scope.enabled = function() {
		return doc.resource_id != null;
	};
	$scope.share = function() {
		client.setItemIds([ doc.resource_id ]);
		client.showSettingsDialog();
	}
}

function MenuCtrl($scope, $location, appId) {
	var onFilePicked = function(data) {
		$scope.$apply(function() {
			if (data.action == 'picked') {
				var id = data.docs[0].id;
				$location.path('/edit/' + id);
			}
		});
	};
	$scope.open = function() {
		var view = new google.picker.View(google.picker.ViewId.DOCS);
		view.setMimeTypes('text/plain');
		var picker = new google.picker.PickerBuilder().setAppId(appId)
				.addViewGroup(
						new google.picker.ViewGroup(google.picker.ViewId.DOCS)
								.addView(google.picker.ViewId.FOLDERS).addView(
										google.picker.ViewId.DOCUMENTS))
				.setCallback(pickerCallback)

				.build();
		picker.setVisible(true);
	};
	$scope.create = function() {
		this.editor.create();
	};
	$scope.save = function() {
		this.editor.save(true);
	}
}

function RenameCtrl($scope, doc) {
	$('#rename-dialog').on('show', function() {
		$scope.$apply(function() {
			$scope.newFileName = doc.info.title;
		});
	});
	$scope.save = function() {
		doc.info.title = $scope.newFileName;
		$('#rename-dialog').modal('hide');
		this.editor.save(true);
	};
}

function AboutCtrl($scope, backend) {
	$('#about-dialog').on('show', function() {
		backend.about().then(function(result) {
			$scope.info = result.data;
		});
	});
}

// google.setOnLoadCallback(createPicker);
// google.load('picker', '1');

// Create and render a Picker object for searching images.

function createPicker() {
	var picker = new google.picker.PickerBuilder().setAppId("368152834540").
	// setOAuthToken(user.email).
	addView(google.picker.ViewId.DOCUMENTS).addView(
			google.picker.ViewId.FOLDERS).setCallback(pickerCallback).build();
	picker.setVisible(true);
}

// A simple callback implementation.
function pickerCallback(data) {
	var url = 'nothing';
	if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
		var doc = data[google.picker.Response.DOCUMENTS][0];
		var id = doc[google.picker.Document.ID];
		var name = doc[google.picker.Document.NAME];
		document.getElementById('doc-title').innerHTML = name;
		
		window.location.replace('docvisual?doc=' + name);

		// Your beautiful D3 code will go here

		var width = 960, height = 600, color = d3.scale.category10(), margin = {
			top : 20,
			right : 10,
			bottom : 10,
			left : 10
		};
		var formatTime = d3.time.format("%B %d, $I:%M %p");

		document.getElementById('chart').innerHTML = "";

		var svg = d3.select("#chart").append("svg").attr("width",
				width + margin.left + margin.right).attr("height",
				height + margin.top + margin.bottom);

		/*
		 * Like d3.time.format, but faster. function parseTime(d) { return new
		 * Date(d.substring(0, 4), d.substring(5, 7) - 1, d .substring(8, 10),
		 * d.substring(11, 13), d.substring(14, 16)); }
		 */
		d3
				.json(
						"revisions.json",
						function(dataset) {

							var revisions = dataset.revisions;

							/*
							 * For crossfilter var revisionsDataset =
							 * crossfilter(revisions), //time =
							 * revisions.dimension(function(d) { return
							 * d3.time.day(parseTime(d.time)); }),
							 * revisionByOrder = revisionsDataset
							 * .dimension(function(d, i) { return i; }),
							 * //revisionByOrder.top(4); revisionGroupByOrder =
							 * revisionByOrder.group(), brush = d3.svg .brush();
							 * END of Crossfilter
							 */

							var authors = dataset.authors;
							var segments = dataset.segments;
							var barPadding = width / revisions.length / 2;

							var xScale = d3.scale.ordinal().domain(
									d3.range(revisions.length))
									.rangeRoundBands([ 0, width ], 0.5);

							var yScale = d3.scale.linear().domain(
									[ 0, d3.max(revisions, function(d) {
										return d.revisionLength;
									}) ]).range([ 0, height ]);

							var xAxis = d3.svg.axis().scale(xScale).orient(
									"top").ticks(revisions.length);

							// var yAxis =
							// d3.svg.axis().scale(yScale).orient("left").ticks(10);

							var groups = svg.selectAll("g").data(revisions)
									.enter().append("g")
									// .filter(function(d,i){return i<10;})
									.attr(
											"transform",
											"translate(" + margin.left + ","
													+ margin.top + ")");

							var revisionIndex = -1;
							var accumulateSegLength = 0;

							groups
									.selectAll("rect")
									.data(function(d) {
										if (d.segments.length != 0)
											return d.segments;
										else
											return [ -1 ];
									})
									.enter()
									.append("rect")
									.attr("class", "segment")
									.attr("x", function(d, i) {
										if (i == 0)
											revisionIndex++;
										return xScale(revisionIndex);
									})
									.attr(
											"y",
											function(d, i) {
												if (i == 0) {
													if (d == -1)
														return yScale(0);
													else {
														accumulateSegLength = segments[d].segmentLength;
														return yScale(accumulateSegLength
																- segments[d].segmentLength);
													}
												} else {
													accumulateSegLength += segments[d].segmentLength;
													return yScale(accumulateSegLength
															- segments[d].segmentLength);
												}
											})
									.attr("width", xScale.rangeBand())
									.attr(
											"height",
											function(d) {
												if (d == -1)
													return 0;
												else
													return yScale(segments[d].segmentLength);
											})
									.attr("fill", function(d, i) {
										if (d != -1)
											return color(segments[d].authorId)
									})
									.on(
											"mouseover",
											function(d) {
												if (d != -1)
													d3
															.select(this)
															.attr(
																	"title",
																	segments[d].content);
											});

							// ===============================
							var link = [], preSegment = [];
							for ( var j = 0; j < revisions.length - 1; j++) {
								link[j] = [];// link[j] represent the link
								// between revision j and j+1
								preSegment = revisions[j].segments; // revision
								// j
								// segments
								var newSegment = revisions[j + 1].segments; // revision
								// j+1
								// segments
								// iterate revision j+1 segments to find father
								// segment (segmentId) or it own(-1) in the
								// previous revision
								for ( var k = 0; k < newSegment.length; k++) {
									if (segments[newSegment[k]].fatherSegmentIndex < 0) {
										var preIndex = preSegment
												.indexOf(newSegment[k]);
										if (preIndex != -1) {
											link[j].push([
													preSegment[preIndex],
													newSegment[k] ]);
										} else {
											// No link
										}
									} else {
										preIndex = preSegment
												.indexOf(segments[newSegment[k]].fatherSegmentIndex);
										if (preIndex != -1) {
											link[j].push([
													preSegment[preIndex],
													newSegment[k] ]);
										} else {

											preIndex = preSegment
													.indexOf(newSegment[k]);
											if (preIndex != -1) {
												link[j].push([
														preSegment[preIndex],
														newSegment[k] ]);
											} else {
												alert("link compute error"
														+ preIndex
														+ " "
														+ segments[newSegment[k]]);
											}
										}
									}

								}
								if (link[j].length == 0) {
									link[j].push([ -1, -1 ]);
								}

							}
							console.log(link);

							var linkGroups = svg
									.selectAll("link.g")
									.data(link)
									.enter()
									.append("g")
									// .filter(function(d,i){return i<10;})
									.attr(
											"transform",
											"translate("
													+ (margin.left + barPadding)
													+ "," + margin.top + ")");

							var revisionIndex = -1;
							linkGroups
									.selectAll("link")
									.data(function(d) {
										return d;
									})
									.enter()
									.append("path")
									.attr("class", "link")
									.attr(
											"d",
											function(d, i) {

												if (i == 0) {
													revisionIndex++;
													accumulateSegLength1 = 0;
													accumulateSegLength2 = 0;
												}

												if (d[1] == -1) {
													return "";
												} else {

													var x0 = xScale(revisionIndex);
													var tempSegments1 = revisions[revisionIndex].segments;
													var tempSegments2 = revisions[revisionIndex + 1].segments;

													var index1 = tempSegments1
															.indexOf(d[0]);
													var index2 = tempSegments2
															.indexOf(d[1]);

													var accumulateSegLength1 = 0, accumulateSegLength2 = 0;

													for ( var q = 0; q < index1; q++) {
														accumulateSegLength1 += segments[tempSegments1[q]].segmentLength;
													}
													for ( var q = 0; q < index2; q++) {
														accumulateSegLength2 += segments[tempSegments2[q]].segmentLength;
													}

													if (d[1] == d[0]) {
														var y0 = yScale(accumulateSegLength1);
													} else {
														var y0 = yScale(accumulateSegLength1
																+ segments[d[1]].offsetInFatherSegment);
													}
													var y1 = yScale(accumulateSegLength2);

													var x1 = x0
															+ xScale
																	.rangeBand();
													var dy = yScale(segments[d[1]].segmentLength);

													return "M " + x0 + "," + y0
															+ " " + x0 + ","
															+ (y0 + dy) + " "
															+ x1 + ","
															+ (y1 + dy) + " "
															+ x1 + "," + y1
															+ "Z";
												}

											})
									.attr(
											"fill",
											function(d, i) {
												if (d[1] != -1)
													return color(segments[d[1]].authorId)
											}).attr("opacity", 0.8)

							;
							// ===============================

							svg.append("g").attr("class", "axis").attr(
									"transform",
									"translate(" + margin.left + ","
											+ margin.top + ")").call(xAxis);

							/*
							 * svg.append("g") .attr("class","axis")
							 * .attr("transform","translate(50,0)")
							 * .call(yAxis);
							 */

							/*
							 * var sortBars = function() { svg.selectAll("rect")
							 * .sort(function(a, b) { return
							 * d3.ascending(a.revisionLength, b.revisionLength); })
							 * .transition() .delay(function(d,i){return i*50;})
							 * .duration(1000) .attr("x", function(d, i) {
							 * return xScale(i); }); };
							 */

						});

	}
	/*
	 * var message = 'You picked:' + id; alert(message);
	 */

}

/*
 * html = '<html>' + document.documentElement.innerHTML + '</html>'; html =
 * escape(html); a = document.createElement('a'); a.href =
 * 'data:text/html;charset=utf-8,' + html;
 */