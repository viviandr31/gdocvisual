package com.google.drive.samples.dredit.gdocvisual;

public class GDV_Link {

	private String linkId;
	private String source;
	private String target;


	public String getLinkId() {
		return linkId;
	}



	public void setLinkId(String linkId) {
		this.linkId = linkId;
	}



	public String getSourceId() {
		return source;
	}



	public void setSourceId(String sourceId) {
		this.source = sourceId;
	}



	public String getTargetId() {
		return target;
	}



	public void setTargetId(String targetId) {
		this.target = targetId;
	}



	public String toString(){
		return " linkId: "+ getLinkId() +
			" \n source: " + getSourceId() +
			" \n target: " + getTargetId()
				;
	}
}
