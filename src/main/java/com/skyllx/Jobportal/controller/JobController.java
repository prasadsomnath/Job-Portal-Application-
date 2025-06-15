package com.skyllx.Jobportal.controller;

import com.skyllx.Jobportal.model.JobPost;
import com.skyllx.Jobportal.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class JobController {
    @Autowired
    private JobService jobService;

    @GetMapping("/jobposts")
    //@Responsebody
    // if we have any view file then we won't mention this class as @restController  to avoid problem we use @Responsebody
    public List<JobPost> getJob(){
        return jobService.getAllJobs();
    }


//    ,produces = {"application/json"}
    @GetMapping(value = "/jobposts/{id}")
    public Optional<JobPost> getJobid(@PathVariable int id){
        // @pathvariable is help for getting the url with particular value based on that  we compare with original data and send a particular data into server
        return jobService.getJobId(id);
    }
    @PostMapping("/jobposts")
    public List<JobPost> addJob(@RequestBody JobPost jobPost){
        jobService.addJob(jobPost);
        return jobService.getAllJobs();
    }
    @PutMapping("/jobposts")
    public List<JobPost>  updateJob(@RequestBody JobPost jobPost){
        jobService.updateJob(jobPost);
        return jobService.getAllJobs();
    }
    @PatchMapping("/jobposts")
    public List<JobPost>  updatesmallJob(@RequestBody JobPost jobPost){
        jobService.updatesmallJob(jobPost);
        return jobService.getAllJobs();
    }
    @DeleteMapping("/jobposts/{id}")
    public  String deleteJob(@PathVariable int id){
        jobService.deleteJob(id);
        return  "successfully deleted";
    }
    @GetMapping("jobposts/keyword/{keyword}")
    public List<JobPost> getkeyword(@PathVariable String keyword){
       return jobService.search(keyword);
    }



}
