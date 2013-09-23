<!DOCTYPE html>
<html lang="en">

<%
	String styles = (String) request.getAttribute("styles");
	out.print(styles);
	styles = styles.replaceAll("\"", "'");
	out.print("\n");
	out.print(styles);
	String d = "{totalCount: 1, identifier: 'EntityID', items: [{'EntityID':'1','Country':'United States','Region':'','State':'California','County':'Santa Clara','City':'San Jose','ZipCode':'95134'}]}";
%>

<p id="demo">My First Paragraph</p>

<p id ="chart"></p>

	<script type="text/javascript">
		var data = new String("<%=styles%>");
		
		/* var data = new String(
				"{'revisions':[{'revisionLength':123,'time':'2011-01-16 00:42:13','segments':[0]},{'revisionLength':123,'time':'2011-01-17 20:50:02','segments':[0]},{'revisionLength':123,'time':'2011-01-17 22:24:48','segments':[0]},{'revisionLength':123,'time':'2011-01-17 23:56:50','segments':[0]},{'revisionLength':123,'time':'2011-01-18 04:17:00','segments':[0]},{'revisionLength':123,'time':'2011-01-18 05:13:45','segments':[0]},{'revisionLength':123,'time':'2011-01-18 07:28:25','segments':[0]},{'revisionLength':123,'time':'2011-01-18 16:50:15','segments':[0]},{'revisionLength':123,'time':'2011-01-18 17:23:54','segments':[0]},{'revisionLength':123,'time':'2011-01-19 00:00:51','segments':[0]},{'revisionLength':123,'time':'2011-01-19 00:14:14','segments':[0]},{'revisionLength':123,'time':'2011-01-19 00:18:21','segments':[0]},{'revisionLength':123,'time':'2011-01-19 00:32:31','segments':[0]},{'revisionLength':123,'time':'2011-01-26 00:32:36','segments':[0]},{'revisionLength':123,'time':'2011-03-07 20:51:31','segments':[0]},{'revisionLength':123,'time':'2011-03-07 20:51:42','segments':[0]},{'revisionLength':123,'time':'2011-03-09 00:07:18','segments':[0]},{'revisionLength':123,'time':'2011-03-09 00:07:52','segments':[0]},{'revisionLength':123,'time':'2012-04-16 21:48:33','segments':[0]}],'segments':[{'segmentLength':9,'authorId':0,'fatherSegmentIndex':-1,'offsetInFatherSegment':0}],'authors':[{'email':'Stephan Chilingaryan'},{'email':'Chris Lang'},{'email':'Raymond Lam'},{'email':'Alex Taubman'},{'email':'Judith Olson'},{'email':'Steve Abrams'}]}"); */
		document.getElementById("demo").innerHTML = data;
	</script>
    <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
	<script src="js/d3.js"></script>
	<script src="js/d3_rev.js"></script>
	<script type="text/javascript">
	</script>
  </body>
</html>

