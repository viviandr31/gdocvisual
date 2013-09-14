package com.google.drive.samples.dredit.gdocvisual;

import com.google.gson.annotations.Expose;

public class GDV_Segment {

	private int segmentId ;

	private int start_index ;
	private int end_index ;
	
	private int new_start_index;
	private int new_end_index;
	
	@Expose
	private int segmentLength ;
	@Expose
	private int authorId;
	
	private GDV_Author author ;
	
	private String content ;
	private boolean visible;
	@Expose
	private int fatherSegmentIndex;
	@Expose
	private int offsetInFatherSegment;
	
	public GDV_Segment(){
		setFatherSegmentIndex(-1);
		setOffsetInFatherSegment(0);
	}

	public int getSegmentId() {
		return segmentId;
	}


	public void setSegmentId(int segmentId) {
		this.segmentId = segmentId;
	}


	public int getStartIndex() {
		return start_index;
	}


	public void setStartIndex(int startIndex) {
		this.start_index = startIndex;
		this.new_start_index = startIndex;
	}


	public int getEndIndex() {
		return end_index;
	}


	public void setEndIndex(int endIndex) {
		this.end_index = endIndex;
		this.new_end_index = endIndex;
	}


	public int getLength() {
		return (int)segmentLength;
	}



	public void setLength(int length) {
		this.segmentLength = length;
	}


	public GDV_Author getAuthor() {
		return author;
	}


	public void setAuthor(GDV_Author author) {
		this.author = author;
		this.setAuthorId(author.getAuthorId());
	}

/*
	public String getTime() {
		return time;
	}


	public void setTime(String time) {
		this.time = time;
	}
*/

	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public boolean isVisible() {
		return visible;
	}


	public void setVisible(boolean visible) {
		this.visible = visible;
	}


	public String toString(){
		return " segmentId: "+ getSegmentId() +
				" \n author: " + getAuthor() +
				" \n start_index: " + getStartIndex()+
				" \n segmentLength: " + getLength()+
				" \n end_index: "+getEndIndex()+
				//" \n time: " +getTime()+
				" \n content: " + getContent()
					;
	}


	public int getAuthorId() {
		return authorId;
	}


	public void setAuthorId(int authorId) {
		this.authorId = authorId;
	}

	public int getOffsetInFatherSegment() {
		return offsetInFatherSegment;
	}

	public void setOffsetInFatherSegment(int offsetInFatherSegment) {
		this.offsetInFatherSegment = offsetInFatherSegment;
	}

	public int getFatherSegmentIndex() {
		return fatherSegmentIndex;
	}

	public void setFatherSegmentIndex(int fatherSegmentIndex) {
		this.fatherSegmentIndex = fatherSegmentIndex;
	}

	public int getNewStartIndex() {
		return new_start_index;
	}

	public void setNewStartIndex(int new_start_index) {
		this.new_start_index = new_start_index;
	}

	public int getNewEndIndex() {
		return new_end_index;
	}

	public void setNewEndIndex(int new_end_index) {
		this.new_end_index = new_end_index;
	}

}
