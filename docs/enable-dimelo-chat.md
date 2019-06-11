# Step by step guide to enable Dimelo chat

- RingCentral Engage(Dimelo) account, [request a demo](http://site.dimelo.com/en/demo#schedule-demo).
- Login to your RingCentral Engage(Dimelo) admin console.
- Create a community in RingCentral Engage Digital -> admin -> community.
- Create Dimelo chat source in RingCentral Engage Digital -> admin -> Source, make sure it enabled and active. Enable multi-domain and add the site you want add Dimelo chat. Copy the Code to include, put the in your site(a local http server is ok).
- Go to RingCentral Engage Digital -> admin -> Agents, click the key icon, give your self read/reply/initiate discussion permission, but make sure do not check Approval required.
- Create a api token in RingCentral Engage Digital -> admin -> API access tokens, select your self as agent.
- Create webhook in RingCentral Engage Digital -> admin -> Webhooks, Registered events, select `content.imported`.
- Go to RingCentral Engage Digital -> admin -> Security, uncheck `Deny iframe integration` and save.
- Go to RingCentral Engage Digital -> admin -> Settings, enable `Task mode` and save.
- Go to RingCentral Engage Digital -> admin -> Channels, in realtime channel select your Dimelo chat source in source input and save.
- Go to RingCentral Engage Digital -> admin -> Targetting, add a new trigger, make sure one button or window shows.
