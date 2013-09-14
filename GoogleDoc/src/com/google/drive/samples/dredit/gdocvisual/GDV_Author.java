package com.google.drive.samples.dredit.gdocvisual;

import com.google.gson.annotations.Expose;

public class GDV_Author {
	private int authorId;
	@Expose
	private String email;
	@Expose
	private String nickName;
	@Expose
	private String name;

	public int getAuthorId() {
		return authorId;
	}
	public void setAuthorId(int authorId) {
		this.authorId = authorId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
