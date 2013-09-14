/*
 * Copyright (c) 2012 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

package com.google.drive.samples.dredit;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.LinkedList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.drive.samples.dredit.gdocvisual.diff_match_patch.Diff;
import com.google.drive.samples.dredit.gdocvisual.GDV_Author;
import com.google.drive.samples.dredit.gdocvisual.GDV_Revision;
import com.google.drive.samples.dredit.gdocvisual.GDV_Segment;
import com.google.drive.samples.dredit.gdocvisual.diff_match_patch.Operation;
import com.google.drive.samples.dredit.gdocvisual.diff_match_patch;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@SuppressWarnings("serial")
public class GenJsonServlet extends DrEditServlet {
	
	String docjson;
	String docId;

	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException, ServletException {

		resp.setContentType("text/html");

		PrintWriter out = resp.getWriter();

		String paramName = "doc";
		docId = req.getParameter(paramName);

		//diffRevision("10bnkUoFN4p6bDL3fmOAmzP68Yp32PqyH5SHxs8Xw69g", resp);
		diffRevision(docId, resp);
		req.setAttribute("styles", docjson);
		/*
		 * out.println( "<!DOCTYPE HTML>\n" + "<html>\n" + "<body>\n" +
		 * "<p>Hello WWW</p>\n" + paramValue + "</body></html>");
		 */
		req.getRequestDispatcher("/WEB-INF/templates/mm.jsp").forward(req, resp);
	}

	private void diffRevision(String docId, HttpServletResponse resp) {
		diff_match_patch dmp = new diff_match_patch();
		dmp.Diff_Timeout = 0;
		// Load Revisions From Database
		LinkedList<GDV_Author> authorList = loadAuthorsFromDB(docId);
		LinkedList<GDV_Revision> revisionList = loadRevisionFromDB(docId,
				authorList);

		GDV_Revision oldRevision = null;
		LinkedList<GDV_Segment> segmentList = new LinkedList<GDV_Segment>();

		int segmentIndex = 0;

		try {

			// final PrintWriter writer = new PrintWriter(new
			// File("revisions.json"));

			for (GDV_Revision newRevision : revisionList) {

				System.out.println("revision" + newRevision.getRevisionId());

				if (oldRevision == null) {
					GDV_Segment insertSegment = new GDV_Segment();
					insertSegment.setSegmentId(segmentIndex++);
					insertSegment.setAuthor(newRevision.getAuthor());
					// insertSegment.setTime(newRevision.getTime());
					insertSegment.setContent(newRevision.getContent());
					insertSegment.setStartIndex(0);
					insertSegment.setLength(newRevision.getContent().length());
					if (insertSegment.getLength() == 0)
						insertSegment.setEndIndex(0);
					else
						insertSegment
								.setEndIndex(insertSegment.getLength() - 1);
					insertSegment.setVisible(true);

					newRevision.addSegment(insertSegment);
					segmentList.add(insertSegment);
				} else {
					LinkedList<Diff> diffs = dmp.diff_main(
							oldRevision.getContent(), newRevision.getContent(),
							false);
					dmp.diff_cleanupSemantic(diffs);

					int charPointer1 = 0;
					int charPointer2 = 0;
					int segmentsSize = oldRevision.getSegments().size();

					for (Diff diff : diffs) {
						Operation diffType = diff.operation;
						String diffContent = diff.text;
						int diffLength = diffContent.length();

						if (diffType.equals(diff_match_patch.Operation.INSERT)) {
							GDV_Segment insertSegment = new GDV_Segment();
							insertSegment.setSegmentId(segmentIndex++);
							insertSegment.setAuthor(newRevision.getAuthor());
							// insertSegment.setTime(newRevision.getTime());
							insertSegment.setContent(diffContent);
							insertSegment.setStartIndex(charPointer2);
							insertSegment.setLength(diffLength);
							if (charPointer2 == 0 && diffLength == 0)
								insertSegment.setEndIndex(0);
							else
								insertSegment.setEndIndex(charPointer2
										+ diffLength - 1);
							insertSegment.setVisible(true);
							newRevision.addSegment(insertSegment);
							segmentList.add(insertSegment);
							charPointer2 += diffLength;
						} else if (diff.operation
								.equals(diff_match_patch.Operation.DELETE)) {
							charPointer1 += diffLength;
						} else {
							// Traverse old revision's segments to divide
							// segment to new segments

							for (int i = 0; i < segmentsSize; i++) {
								GDV_Segment segment = oldRevision.getSegments()
										.get(i);

								if (charPointer1 > segment.getEndIndex())
									continue;
								else if ((charPointer1 + diffLength - 1) < segment
										.getStartIndex())
									break;
								// The same segment
								else if (charPointer1 == segment
										.getStartIndex()
										&& (charPointer1 + diffLength - 1) == segment
												.getEndIndex()) {
									segment.setNewStartIndex(charPointer2);
									segment.setNewEndIndex(segment
											.getNewStartIndex()
											+ segment.getLength() - 1);
									newRevision.addSegment(segment);
									charPointer2 += segment.getLength();
								} else if (charPointer1 == segment
										.getStartIndex()
										&& (charPointer1 + diffLength - 1) > segment
												.getEndIndex()) {
									segment.setNewStartIndex(charPointer2);
									segment.setNewEndIndex(segment
											.getNewStartIndex()
											+ segment.getLength() - 1);
									newRevision.addSegment(segment);
									charPointer2 += segment.getLength();
								} else if (charPointer1 == segment
										.getStartIndex()
										&& (charPointer1 + diffLength - 1) < segment
												.getEndIndex()) {
									GDV_Segment targetSegment = new GDV_Segment();
									targetSegment
											.setAuthor(segment.getAuthor());
									targetSegment.setLength(diffLength
											- segment.getStartIndex()
											+ charPointer1);
									targetSegment.setStartIndex(charPointer2);
									targetSegment.setEndIndex(targetSegment
											.getStartIndex()
											+ targetSegment.getLength() - 1);
									targetSegment
											.setContent(diffContent.substring(
													segment.getStartIndex()
															- charPointer1,
													segment.getStartIndex()
															- charPointer1
															+ targetSegment
																	.getLength()));
									targetSegment.setSegmentId(segmentIndex++);
									// targetSegment.setTime(newRevision.getTime());
									targetSegment.setFatherSegmentIndex(segment
											.getSegmentId());
									targetSegment.setOffsetInFatherSegment(0);
									targetSegment.setVisible(true);

									newRevision.addSegment(targetSegment);
									segmentList.add(targetSegment);

									charPointer2 += targetSegment.getLength();
								}
								//
								else if (charPointer1 > segment.getStartIndex()
										&& (charPointer1 + diffLength - 1) <= segment
												.getEndIndex()) {

									GDV_Segment targetSegment = new GDV_Segment();
									targetSegment
											.setAuthor(segment.getAuthor());
									targetSegment.setLength(diffLength);
									targetSegment.setStartIndex(charPointer2);
									targetSegment.setEndIndex(targetSegment
											.getStartIndex()
											+ targetSegment.getLength() - 1);
									targetSegment.setContent(diffContent);
									targetSegment.setSegmentId(segmentIndex++);
									// targetSegment.setTime(newRevision.getTime());
									targetSegment.setFatherSegmentIndex(segment
											.getSegmentId());
									targetSegment
											.setOffsetInFatherSegment(charPointer1
													- segment.getStartIndex());
									targetSegment.setVisible(true);

									newRevision.addSegment(targetSegment);
									segmentList.add(targetSegment);
									charPointer2 += targetSegment.getLength();
								} else if (charPointer1 > segment
										.getStartIndex()
										&& (charPointer1 + diffLength - 1) > segment
												.getEndIndex()) {

									GDV_Segment targetSegment = new GDV_Segment();
									targetSegment.setSegmentId(segmentIndex++);
									targetSegment
											.setAuthor(segment.getAuthor());
									// targetSegment.setTime(newRevision.getTime());
									targetSegment.setFatherSegmentIndex(segment
											.getSegmentId());
									targetSegment
											.setOffsetInFatherSegment(charPointer1
													- segment.getStartIndex());
									targetSegment.setStartIndex(charPointer2);
									targetSegment.setLength(segment
											.getEndIndex() - charPointer1 + 1);
									targetSegment.setEndIndex(charPointer2
											+ targetSegment.getLength() - 1);
									targetSegment.setContent(diffContent
											.substring(0, segment.getEndIndex()
													- charPointer1 + 1));
									targetSegment.setVisible(true);

									newRevision.addSegment(targetSegment);
									segmentList.add(targetSegment);
									charPointer2 += targetSegment.getLength();
								} else if (charPointer1 < segment
										.getStartIndex()
										&& (charPointer1 + diffLength - 1) == segment
												.getEndIndex()) {
									segment.setNewStartIndex(charPointer2);
									segment.setNewEndIndex(segment
											.getNewStartIndex()
											+ segment.getLength() - 1);
									newRevision.addSegment(segment);
									charPointer2 += segment.getLength();
								} else if (charPointer1 < segment
										.getStartIndex()
										&& (charPointer1 + diffLength - 1) > segment
												.getEndIndex()) {

									segment.setNewStartIndex(charPointer2);
									segment.setNewEndIndex(segment
											.getNewStartIndex()
											+ segment.getLength() - 1);

									newRevision.addSegment(segment);
									charPointer2 += segment.getLength();
								} else if (charPointer1 < segment
										.getStartIndex()
										&& (charPointer1 + diffLength - 1) < segment
												.getEndIndex()) {

									GDV_Segment targetSegment = new GDV_Segment();
									targetSegment
											.setAuthor(segment.getAuthor());
									targetSegment.setLength(charPointer1
											+ diffLength
											- segment.getStartIndex());
									targetSegment.setStartIndex(charPointer2);
									targetSegment.setEndIndex(targetSegment
											.getStartIndex()
											+ targetSegment.getLength() - 1);
									targetSegment
											.setContent(diffContent.substring(
													segment.getStartIndex()
															- charPointer1,
													segment.getStartIndex()
															- charPointer1
															+ targetSegment
																	.getLength()));
									targetSegment.setSegmentId(segmentIndex++);
									// targetSegment.setTime(newRevision.getTime());
									targetSegment.setFatherSegmentIndex(segment
											.getSegmentId());
									targetSegment.setOffsetInFatherSegment(0);
									targetSegment.setVisible(true);

									newRevision.addSegment(targetSegment);
									segmentList.add(targetSegment);
									charPointer2 += targetSegment.getLength();
								}

							}

							charPointer1 += diffLength;

						}

					}

				}
				newRevision.updateSegmentsIndex();
				oldRevision = newRevision;
			}

			Gson gson = new GsonBuilder()
					.excludeFieldsWithoutExposeAnnotation().create();
			String revisionOutput = gson.toJson(revisionList);
			String segmentOutput = gson.toJson(segmentList);
			String authorOutput = gson.toJson(authorList);

			resp.getWriter().println(
					"{\"revisions\":" + revisionOutput + ",\"segments\":"
							+ segmentOutput + ",\"authors\":" + authorOutput
							+ "}");
			docjson = "{'revisions':" + revisionOutput + ",'segments':"
					+ segmentOutput + ",'authors':" + authorOutput
					+ "}";
			// writer.close();
		} catch (final Exception e) {
			e.printStackTrace();
		}
	}

	private static LinkedList<GDV_Revision> loadRevisionFromDB(String docId,
			LinkedList<GDV_Author> authorList) {
		LinkedList<GDV_Revision> revisionList = new LinkedList<GDV_Revision>();

		/*
		 * try { System.out.println("Loading driver...");
		 * Class.forName("com.mysql.jdbc.Driver");
		 * System.out.println("Driver loaded!"); } catch (ClassNotFoundException
		 * e) { throw new RuntimeException(
		 * "Cannot find the driver in the classpath!", e); } String url =
		 * "jdbc:mysql://localhost:8889/google_doc_visualization"; String
		 * username = "root"; String password = "root"; Connection connection =
		 * null; Statement statement = null; try {
		 * System.out.println("Connecting database..."); connection =
		 * DriverManager.getConnection(url, username, password);
		 * System.out.println("Database connected!");
		 * 
		 * statement = connection.createStatement(); // For test case, set a
		 * LIMIT in the mysql query to test specific revisions ResultSet rs =
		 * statement
		 * .executeQuery("SELECT * FROM `revision` Where docId='"+docId+"'");
		 * while (rs.next()){ GDV_Revision revision = new GDV_Revision();
		 * revision.setDocId(rs.getString("docId"));
		 * revision.setRevisionId(rs.getString("revisionId"));
		 * revision.setContent(rs.getString("content")); GDV_Author author =
		 * findAuthorByEmail(authorList,rs.getString("author"));
		 * revision.setAuthor(author); revision.setTime(rs.getString("time"));
		 * revision.setRevisionLength(revision.getContent().length());
		 * revisionList.add(revision); } rs.close(); } catch (SQLException e) {
		 * throw new RuntimeException("Cannot connect the database!", e); }
		 * finally { System.out.println("Closing the connection."); if
		 * (statement != null) try { statement.close(); } catch (SQLException
		 * ignore) {} if (connection != null) try { connection.close(); } catch
		 * (SQLException ignore) {}
		 * 
		 * }
		 */

		// jeff
		GDV_Revision revision = new GDV_Revision();
		revision.setDocId("10bnkUoFN4p6bDL3fmOAmzP68Yp32PqyH5SHxs8Xw69g");
		revision.setRevisionId("0");
		revision.setContent("content 0");
		GDV_Author author = findAuthorByEmail(authorList, "jeff");
		revision.setAuthor(author);
		revision.setTime("2012:12:12");
		revision.setRevisionLength(123);
		revisionList.add(revision);

		return revisionList;
	}

	private static GDV_Author findAuthorByEmail(
			LinkedList<GDV_Author> authorList, String email) {
		for (GDV_Author author : authorList) {
			if (author.getEmail().equals(email))
				return author;
		}
		System.out.println("Wrong author: " + email);
		return null;
	}

	private static LinkedList<GDV_Author> loadAuthorsFromDB(String docId) {
		LinkedList<GDV_Author> authorsList = new LinkedList<GDV_Author>();

		/*
		 * try { System.out.println("Loading driver...");
		 * Class.forName("com.mysql.jdbc.Driver");
		 * System.out.println("Driver loaded!"); } catch (ClassNotFoundException
		 * e) { throw new RuntimeException(
		 * "Cannot find the driver in the classpath!", e); } String url =
		 * "jdbc:mysql://localhost:8889/google_doc_visualization"; String
		 * username = "root"; String password = "root"; Connection connection =
		 * null; Statement statement = null; try {
		 * System.out.println("Connecting database..."); connection =
		 * DriverManager.getConnection(url, username, password);
		 * System.out.println("Database connected!");
		 * 
		 * statement = connection.createStatement(); // For test case, set a
		 * LIMIT in the mysql query to test specific revisions ResultSet rs =
		 * statement
		 * .executeQuery("SELECT distinct(`author`) FROM `revision` Where docId='"
		 * +docId+"'"); int authorId = 0; while (rs.next()){ GDV_Author author =
		 * new GDV_Author(); author.setAuthorId(authorId++);
		 * author.setEmail(rs.getString("author")); authorsList.add(author); }
		 * rs.close(); } catch (SQLException e) { throw new
		 * RuntimeException("Cannot connect the database!", e); } finally {
		 * System.out.println("Closing the connection."); if (statement != null)
		 * try { statement.close(); } catch (SQLException ignore) {} if
		 * (connection != null) try { connection.close(); } catch (SQLException
		 * ignore) {}
		 * 
		 * }
		 */

		// jeff
		GDV_Author author = new GDV_Author();
		author.setAuthorId(0);
		author.setEmail("jeff");
		authorsList.add(author);

		return authorsList;
	}
}