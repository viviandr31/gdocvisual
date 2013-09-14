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
		document.getElementById("demo").innerHTML=data;
		
	</script>
    <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
	<script src="js/d3.js"></script>
	<script src="js/d3_rev.js"></script>
	<script type="text/javascript">
	</script>
  </body>
</html>

