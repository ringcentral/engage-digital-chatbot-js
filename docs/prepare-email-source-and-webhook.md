# Steps to prepare email source and webhook for chatbot

- RingCentral Engage(Dimelo) accout, [request a demo](http://site.dimelo.com/en/demo#schedule-demo).
- Login to your RingCentral Engage(Dimelo) admin console.
- Create a community in RingCentral Engage Digital -> admin -> community.
- Create email source in RingCentral Engage Digital -> admin -> Source, make sure it enabled and active. You only need input a email address in POSTMARK SETTINGS -> Email Address, leave other default.
- Go to RingCentral Engage Digital -> admin -> Agents, click the key icon, give your self read/reply/initiate discussion permission, but make sure do not check Approval required.
- Create a api token in RingCentral Engage Digital -> admin -> API access tokens, select your self as agent.
- Create webhook in RingCentral Engage Digital -> admin -> Webhooks, Registered events, select `content.imported`.
