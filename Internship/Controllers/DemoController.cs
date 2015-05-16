using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Internship.Controllers
{
    public class DemoController : Controller
    {
       
        // GET: Demo
        public ActionResult AboutUs()
        {
            return View();
        }

        public ActionResult HowItWorks()
        {
            return View();
        }
        
        public ActionResult LearnMore()
        {
            return View();
        }

        public ActionResult MoreTestimonials()
        {
            return View();
        }
        public ActionResult Press()
        {
            return View();
        }
        public ActionResult ContactUs()
        {
            return View();
        }
        public ActionResult Jobs()
        {
            return View();
        }
        public ActionResult Blog()
        {
            return View();
        }
    }
}