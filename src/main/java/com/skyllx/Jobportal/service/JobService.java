package com.skyllx.Jobportal.service;


import com.skyllx.Jobportal.model.JobPost;
import com.skyllx.Jobportal.repo.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {
    @Autowired
    private JobRepo jobRepo;

   public  void addJob(JobPost jobPost){

       jobRepo.save(jobPost);
   }
   public List<JobPost> getAllJobs(){

       return jobRepo.findAll();
   }

    public Optional<JobPost> getJobId(int id) {

       return jobRepo.findById(id);
    }

    public void updateJob(JobPost jobPost) {
       jobRepo.save(jobPost);
    }

    public void deleteJob(int id) {
       jobRepo.deleteById(id);
    }


    public List<JobPost> search(String keyword) {
       return  jobRepo.findByPostProfileContainingOrPostDescContaining(keyword,keyword);
    }

    public void updatesmallJob(JobPost jobPost) {
       jobRepo.save(jobPost);
    }

}
