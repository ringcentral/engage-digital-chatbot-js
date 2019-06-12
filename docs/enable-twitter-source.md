# Step by step guide to enable twitter source

- RingCentral Engage(Dimelo) account, [request a demo](http://site.dimelo.com/en/demo#schedule-demo).
- Login to your RingCentral Engage(Dimelo) admin console.
- Create a Twitter community in RingCentral Engage Digital -> admin -> community.
- Create Twitter source in RingCentral Engage Digital -> admin -> Source, you can get user id, token, secret by click the `Continue with twitter` button.
- Go to RingCentral Engage Digital -> admin -> Agents, click the key icon, give your self read/reply/initiate discussion permission, but make sure do not check Approval required.
- Create a api token in RingCentral Engage Digital -> admin -> API access tokens, select your self as agent.
- Create webhook in RingCentral Engage Digital -> admin -> Webhooks, Registered events, select `content.imported`.
- Go to RingCentral Engage Digital -> admin -> Channels, in realtime channel select your Twitter source in source input and save.
