# Steps to prepare email source and webhook for chatbot

1. RingCentral Engage (Dimelo) account, [request a demo](http://site.dimelo.com/en/demo#schedule-demo).
1. Login to your RingCentral Engage (Dimelo) admin console.
1. Create a community in RingCentral Engage Digital -> "ADMIN" -> "Communities".
1. Create email source in RingCentral Engage Digital -> "ADMIN" -> "Sources", make sure it enabled and active. You only need input a email address in "POSTMARK SETTINGS" -> "Email address", leave other default. To see an example, click "Save" without one to see the error message.
1. Go to RingCentral Engage Digital -> "ADMIN" -> "Agents", click the key icon, give your self read/reply/initiate discussion permission, but make sure do not check Approval required.
1. Create a api token in RingCentral Engage Digital -> "ADMIN" -> "API access tokens", select your self as agent.
1. Create webhook in RingCentral Engage Digital -> "ADMIN" -> "Webhooks", Registered events, select `content.imported`.
