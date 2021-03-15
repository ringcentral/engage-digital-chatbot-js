# Step by step guide to enable Dimelo chat(Engage Messaging)

## For Dimelo user

- RingCentral Engage(Dimelo) account, [request a demo](https://www.ringcentral.com/view_demo_cx.html).
- Login to your RingCentral Engage(Dimelo) admin console.
- Create Engage Messaging channel in RingCentral Engage Digital -> admin -> Channels. Copy the Code to include, put the in your site(a local http server is ok).
- Go to RingCentral Engage Digital -> admin -> Agents, click the key icon, give yourself read/reply/initiate discussion permission, but make sure do not check Approval required.
- Create a api token in RingCentral Engage Digital -> admin -> API access tokens, select your self as agent.
- Create webhook in RingCentral Engage Digital -> admin -> Webhooks, Registered events, select `content.imported`.
