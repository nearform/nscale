# AWS

## Requirements

* An [Amazon AWS account][AWS-signup]

## Instantiating nscale-base AMI

We can use the <a href="https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-a405ded3" target="_blank">nscale-base</a> 
AMI "bookmark" to get started. This public AMI is configured according to the
[setup guide][setup-guide] (except for git credentials, see below).

We can choose our type on the bookmarks page (micro is fine for getting started),
then click "Review and Launch". If we're happy with the details we can then press
"Launch". We'll be asked to manage key pairs (we can create one if we don't have one),
after which we can click the "Launch Instances" button.

## Logging on to the instance

After a short wait our instance will have initialized, we grab it's public IP from 
the console and then login to our instance via SSH

```
chmod 400 <keysfile.pem>
ssh -i <keysfile.pem> ubuntu@<public ip>
```

### Upgrading Node

If Node is out of date (check `node --version` against [nodejs.org][nodejs]),
follow the [setup guide][setup-guide] on upgrading.

### GitHub

Since our AMI was configured without git credentials (and `nscale` uses them
to identify users), you need to run:

```
git config --global user.name "<user name>"
git config --global user.email "<email>"
```

If you're planning on using GitHub, make sure to generate an SSH key following
[GitHub's instructions][generate-ssh-keys]. (*Don't* copy over your personal key
for security reasons.)

# Next Steps

Your AMI should now be setup! Follow the [development guide][development-guide]
to get started with using `nscale` for deployment.

[AWS-signup]: https://portal.aws.amazon.com/gp/aws/developer/registration/index.html?nc1=h_ct
[nodejs]: http://nodejs.org
[setup-guide]: setup-guide.md
[generate-ssh-keys]: https://help.github.com/articles/generating-ssh-keys/
[development-guide]: development-guide.md
