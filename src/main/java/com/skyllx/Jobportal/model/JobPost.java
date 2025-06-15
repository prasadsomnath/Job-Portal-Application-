package com.skyllx.Jobportal.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Entity
@Data
@Table(name="JobPost")
public class JobPost {
    @Id
     @Column(name="POSTID")
    private int postId;
    @Column(name="POSTPROFILE")
    private String postProfile;
    @Column(name="POSTDESC")
    private  String postDesc;
    @Column(name="REQEXP")
    private int reqExperience;
    @Column(name="POSTTECHSTACK")
  // @ElementCollection
    private List<String> postTechStack;

//    public String getPostProfile() {
//
//        return postProfile;
//    }
//
//    public void setPostProfile(String postProfile) {
//        this.postProfile = postProfile;
//    }
//
//    public String getPostDesc() {
//        return postDesc;
//    }
//
//    public void setPostDesc(String postDesc) {
//        this.postDesc = postDesc;
//    }
//
//    public int getReqExperience() {
//        return reqExperience;
//    }
//
//    public void setReqExperience(int reqExperience) {
//        this.reqExperience = reqExperience;
//    }
//
//    public List<String> getPostTechStack() {
//        return postTechStack;
//    }
//
//    public void setPostTechStack(List<String> postTechStack) {
//        this.postTechStack = postTechStack;
//    }
//
//    public int getPostId() {
//        return postId;
//    }
//
//    public void setPostId(int postId) {
//        this.postId = postId;
//    }
///after creating the private variable we need to write the constructor ,setter, getter to avoid boilerplate code
    ///  we are using lombork dependence which provide some service like as @data(which provide all setter,getter automaticaly),@noargsconstructor
    /// @AllArgsConstructor etc
}
