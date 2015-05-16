using Microsoft.AspNet.Identity.Owin;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Internship.Models;
namespace Internship.Controllers
{
   
        [Authorize]
        public class AccountController : Controller
        {
            private ApplicationUserManager _userManager;
            private ApplicationSignInManager _signInManager;

            public AccountController() { }

            public AccountController(ApplicationUserManager userManager, ApplicationSignInManager signInManager)
            {
                UserManager = userManager;
                SignInManager = signInManager;
            }

            public ApplicationUserManager UserManager
            {
                get { return _userManager ?? HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>(); }
                private set { _userManager = value; }
            }

            public ApplicationSignInManager SignInManager
            {
                get { return _signInManager ?? HttpContext.GetOwinContext().Get<ApplicationSignInManager>(); }
                private set { _signInManager = value; }
            }

            [AllowAnonymous]
            public ActionResult Login()
            {
                return View();
            }
        [Authorize]
            public ActionResult Buy()
            {
                return View();   

            }
        [Authorize]
        public ActionResult SellYourCar()
        {
            return View();

        }

     }
}