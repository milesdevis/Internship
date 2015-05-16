using System.Web;
using System.Web.Optimization;

namespace Internship
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
          

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/Internhsip")
    .IncludeDirectory("~/Scripts/Controllers", "*.js")
    .IncludeDirectory("~/Scripts/Factories", "*.js")
    .IncludeDirectory("~/Scripts/DropDownMenus", "*.js")

    .Include("~/Scripts/Internship.js"));
        }
    }
}
