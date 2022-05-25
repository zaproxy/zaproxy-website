---
title: "Does ZAP offer community services?"
type: faq
category: General Questions
weight: 2
---
Yes, the ZAP team currently offers the following services to the community.

## Be Aware

The following are all subject to change without notice. We intend for them all to remain as-is over the long term, however, they are primarily intended to be used with ZAP and as such may change is/when required by the project/team.

## DNS

### Cloud Metadata

Specific sub-domains of zaproxy.org have been setup to facilitate Cloud Metadata related testing scenarios:

- `aws.zaproxy.org` points to `169.254.169.254` (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html)
- `alibaba.zaproxy.org` points to `100.100.100.200` (https://www.alibabacloud.com/blog/alibaba-cloud-ecs-metadata-user-data-and-dynamic-data_594351)

Hat tip to [Projectdiscovery/interact.sh](https://github.com/projectdiscovery/interactsh) for the concept.
