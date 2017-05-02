# To put in your own slack channel:
* have at least node 6 installed
* ```npm -g now```
* ```git clone https://github.com/adamclark64/xkcd-slash-command```
* ```now```
* it should already be but if not, copy the url created from running ```now```
## Add To your Slack channel
* Search [this page](https://slack.com/apps) for the "Slash Commands" application. Once you've found it, click on "Add Configuration" in the sidebar:
* You'll be forwarded to another page where you need to enter the name of your slash command. In our case, it should be ```/xkcd```. Enter it and click on the green button at the bottom.
* Now you should see a section named Integration Settings. In there, we need to add the address of our deployment to the URL field, select GET as the Method and enter "xkcd" in the Customize Name input.

