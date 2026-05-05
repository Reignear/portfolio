import Landing from "../pages/landing";
import SampleCalendarManagement from "../pages/section5/sample-calendar-management";
import SampleCRM from "../pages/section5/sample-crm";
import SampleDataManagement from "../pages/section5/sample-data-management";
import SampleEmailManagement from "../pages/section5/sample-email-management";
import SampleSocialMedia from "../pages/section5/sample-social-media";
import SampleWebsite from "../pages/section5/sample-website";

export const Route = [
  { path: "/", element: <Landing /> },
  { path: "/sample/social-media", element: <SampleSocialMedia /> },
  {
    path: "/sample/calendar-management",
    element: <SampleCalendarManagement />,
  },
  { path: "/sample/crm", element: <SampleCRM /> },
  { path: "/sample/data-management", element: <SampleDataManagement /> },
  { path: "/sample/email-management", element: <SampleEmailManagement /> },
  { path: "/sample/website", element: <SampleWebsite /> },
];
