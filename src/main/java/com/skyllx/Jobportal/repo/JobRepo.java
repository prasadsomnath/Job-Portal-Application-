package com.skyllx.Jobportal.repo;

import com.skyllx.Jobportal.model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.io.FileOutputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

public interface JobRepo extends JpaRepository< JobPost, Integer> {
    public List<JobPost> findByPostProfileContainingOrPostDescContaining(String keyword, String Keyword);

//    @Query("SELECT j FROM JobPost j WHERE :keyword MEMBER OF j.postTechStack")
//  public   List<JobPost> findByPostTechStackContainingKeyword(@Param("keyword") String keyword);

}
