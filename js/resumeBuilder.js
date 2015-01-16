
//JSONs for bio, work, education and projects

var bio = {
  "name": "Linda Zhao",
  "role": "Web Developer",
  "welcomeMessage": "welcome to my resume. This resume is the results of learning JavaScript online course. etc etc etc",
  "contacts": {
    "mobile": "847-888-8888",
    "email": "lindazhaoatt@gmail.com",
    "github": "lindazhaoatt",
    "location": "Arlington Heights, Illois"
       },
  "bioPic": "images/fry.jpg",
  "skills": ["awesomeness", "programming", "teaching", "JS"],

   displaybio:  function()
  {

    var formattedName=HTMLheaderName.replace('%data%', bio.name);
    var formattedRole=HTMLheaderRole.replace('%data%', bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
    $("#header").append(formattedBioPic);

    var formatedWelcomMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
    $("#header").append(formatedWelcomMsg);
    
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    
    //var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    //var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
    
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
    $("#topContacts").append(formattedContacts);
    $('#footerContacts').append(formattedContacts);
      
    
     if (bio.skills.length>0 ) {
      //display skills in the array
        $("#header").append(HTMLskillsStart);

        for (i in bio.skills) {
          var formattedSkills=HTMLskills.replace("%data%", bio.skills[i]) ;
          $("#skills").append(formattedSkills);
       }
    }
   }

};






var work = {
    "jobs": [	
     {
  	"employer": "AT&T",
  	"title": "Technical Architect",
  	"location": "Hoffman Estates, Illois",
  	"dates": "September 1999 to present",
  	"description": "Has been working on many financial related projects. etc"
     },
     {
  	"employer": "Joint Commission",
  	"title": "Senior Developer",
  	"location": "Oakbroke, Illois",
  	"dates": "February 1997 - September 1999",
  	"description": "Front end developer using Visual Basic, Power Builder, PeopleSoft etc"
     },
     {
  	"employer": "Dames & Moore",
  	"title": "Software Developer",
  	"location": "Columbus, OH",
  	"dates": "July 1994 - February 1997",
  	"description": "Engineering type of development work, learned programming skill from this job. Had to stay in the job to get greencard. It was my first job in US after attending college in US etc"
     }
    ]
 ,
 
    displaywork:  function()
    {

     for (var i in work.jobs) {
      //create new div for work experience
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[i].employer) ;
        var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[i].title) ;
     
        var formattedWorkDates=HTMLworkDates.replace("%data%", work.jobs[i].dates) ;
        var formattedWorkLocation=HTMLworkLocation.replace("%data%", work.jobs[i].location) ;
        var formattedWorkDescription=HTMLworkDescription.replace("%data%", work.jobs[i].description) ;
        
        var formattedEmployerTitle=formattedEmployer+ formattedTitle+ formattedWorkDates+ formattedWorkLocation+formattedWorkDescription;

         $(".work-entry:last").append(formattedEmployerTitle);
      }
     }
  } 
 ;


 
var education = {
    "schools": [
       {
       	"name": "Tsinhua University",
       	"city": "Beijing, China",
       	"degree": "BS",
       	"majors": ["Engineering", "Environmental Science"],
       	"dates": 1983,
       	"url": "http://www.tsinghua.edu.cn" //'<a href="http://www.tsinghua.edu.cn">http://www.tsinghua.edu.cn</a>'
       },

      {
       	"name": "University of Cincinnati",
       	"city": "Cincinnati, OH",
       	"degree": "Masters",
       	"majors": ["Engineering"],
       	"dates": 1992,
  	    "url": "http://www.uc.edu"
       }
    ],

    "OnlineCourses": [
    	{"title": "Intro to HTML and CSS",
    	"school": "Udacity Online school",
    	"dates": 2014,
    	"url": "https://www.udacity.com/course/ud304"
    	},

    	{"title": "JavaScript Basics",
    	"school": "Udacity Online school",
    	"dates": 2014,
    	"url": "https://www.udacity.com/course/ud804"
    	}
      ],

   displayeducation: function (){

    for (var i in education.schools) {

     //create new div for eduction
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName=HTMLschoolName.replace("%data%", education.schools[i].name) ;
      var formattedSchoolDegree=HTMLschoolDegree.replace("%data%", education.schools[i].degree) ;
     
      var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;
      $(".education-entry:last").append(formattedSchoolTitle);


      var formattedSchoolLocation=HTMLschoolLocation.replace("%data%", education.schools[i].city) ;
      $(".education-entry:last").append(formattedSchoolLocation);

      var formattedSschoolDates=HTMLschoolDates.replace("%data%", education.schools[i].dates) ;
      $(".education-entry:last").append(formattedSschoolDates);

      var formattedSchoolMajor=HTMLschoolMajor.replace("%data%", education.schools[i].majors) ;
      $(".education-entry:last").append(formattedSchoolMajor);
        
    };


   $("#education").append(HTMLonlineClasses);

    for (var i in education.OnlineCourses) {

      $("#education").append(HTMLschoolStart);

      var formattedonlineTitle=HTMLonlineTitle.replace("%data%", education.OnlineCourses[i].title) ;
      var formattedonlineSchool=HTMLonlineSchool.replace("%data%", education.OnlineCourses[i].school) ;

      var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool
      $(".education-entry:last").append(formattedonlineTitleSchool);

      var formattedonlineDates=HTMLonlineDates.replace("%data%", education.OnlineCourses[i].dates) ;
      $(".education-entry:last").append(formattedonlineDates);

      var formattedonlineURL=HTMLonlineURL.replace("%data%", education.OnlineCourses[i].url) ;
      $(".education-entry:last").append(formattedonlineURL);

     };

     }

  };

 

var projects = {
	"projects": [
		{
		"title": "Financial Consolidation T to CFAS",
		"dates": "Ocber 2000",
		"description": "Bring in legacy AT&T companies into CFAS suites of financial applications.",
		"url": "images/197x148.gif"
	},

		{
		"title": "Financial Consolidation B to CFAS",
		"dates": "Ocber 2001",
		"description": "Bring in legacy BellSouth companies into CFAS suites of financial applications.",
    "url": "images/197x148.gif"
	},

	{
		"title": "Financial Consolidation NR to CFAS",
		"dates": "Ocber 2005",
		"description": "Bring in legacy non-regulated companies into CFAS suites of financial applications.",
    "url": "images/197x148.gif"
	},
	
	{
		"title": "CPFM",
		"dates": "February 2014",
		"description": "CPFM using Clarity PPM packaged software.",
    "url": "images/197x148.gif"
	},

	{
		"title": "FCM Conversion",
		"dates": "September 2014",
		"description": "FCM conversion",
    "url": "images/197x148.gif"
	}
	],

    displayprojects: function (){

      for (var i in projects.projects) {

        //create new div for work experience
        $("#projects").append(HTMLprojectStart);

        var formattedprojectTitle=HTMLprojectTitle.replace("%data%", projects.projects[i].title) ;
        var formattedProjectsDates=HTMLprojectDates.replace("%data%", projects.projects[i].dates) ;
        var formattedProjectDescription=HTMLprojectDescription.replace("%data%", projects.projects[i].description) ;
        var formattedProjectImage=HTMLprojectImage.replace("%data%", projects.projects[i].url) ;
        
        var formattedProjectInfo=formattedprojectTitle+ formattedProjectsDates+ formattedProjectDescription+ formattedProjectImage;

         $(".project-entry:last").append(formattedProjectInfo);
      }

   }

  };


 
  function locationizer(work_obj) {
      var location = [];

      for (i in work_obj.jobs)
      { 
       //console.log(work_obj.jobs[i].location);
         location.push(work_obj.jobs[i].location);
       }
      return location;
  }
   
   function inName(name) {
 
     var newName = (name.trim()).toUpperCase();
     newName = newName.substring(0,1) + (newName.substring(1, newName.search(" "))).toLowerCase() + newName.substring(newName.search(" "));

    return newName;
  }
    

 //map
 var map = {  
  displaymap: function() {
    window.addEventListener('load', map.initialize);    
    $('#mapDiv').append(googleMap);
  } 
}

 //$("#mapDiv").append(googleMap);

 bio.displaybio();
 work.displaywork();
 projects.displayprojects();
 education.displayeducation();
 map.displaymap();
