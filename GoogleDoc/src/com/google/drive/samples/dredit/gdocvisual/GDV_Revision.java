package com.google.drive.samples.dredit.gdocvisual;

import java.util.ArrayList;
import java.util.LinkedList;

import com.google.gson.annotations.Expose;

public class GDV_Revision {
	
	
	
	private String docId;
	private String revisionId;
	private GDV_Author author; //TODO could be not single author, waiting for GOOGLE response
	@Expose
	private long revisionLength;
	@Expose
	private String time;
	private String title;
	private String content; // for the initial getting data from Google
	private ArrayList<GDV_Segment> segmentsList;
	@Expose
	private LinkedList<Integer> segments;
	
	public GDV_Revision(){
		segmentsList = new ArrayList<GDV_Segment>();
		segments = new LinkedList<Integer>();
	}
	
	public String getDocId() {
		return docId;
	}

	public void setDocId(String docId) {
		this.docId = docId;
	}

	public String getRevisionId() {
		return revisionId;
	}

	public void setRevisionId(String revisionId) {
		this.revisionId = revisionId;
	}

	public GDV_Author getAuthor() {
		return author;
	}

	public void setAuthor(GDV_Author author) {
		this.author = author;
	}

	public long getRevisionLength() {
		return revisionLength;
	}

	public void setRevisionLength(long length) {
		this.revisionLength = length;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public void addSegment(GDV_Segment insertSegment) {
		this.segmentsList.add(insertSegment);
		this.segments.add(insertSegment.getSegmentId());
	}

	public ArrayList<GDV_Segment> getSegments() {
		return this.segmentsList;
	}

	public void updateSegmentsIndex() {
		// TODO Auto-generated method stub
		for(GDV_Segment s : this.segmentsList ){
			s.setStartIndex(s.getNewStartIndex());
			s.setEndIndex(s.getNewEndIndex());
		}
		
	}
}
