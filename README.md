# TimeKube 

<p>
  <img width="250" src="assets/logo.png" alt="TK Logo">
</p>

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-lightgray?style=for-the-badge&logo=next.js&logoColor=black)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Tailwindcss](https://img.shields.io/badge/Tailwindcss-090e1a?style=for-the-badge&logo=tailwindcss)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![sqlite](https://img.shields.io/badge/sqlite-090e1a?style=for-the-badge&logo=sqlite&logoColor=blue)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
TimeKube is a Kubernetes "Time Machine" that provides developers with an intuitive, user-friendly GUI to easily and securely create backups for your Kubernetes clusters with a few clicks of a button; ensuring the protection of your data, configurations, and files.

Most free and open-source Kubernetes backup and restore tools focus on command-line usage requiring developers to learn the complexities of yet another command-line tool which can have complicated usage patterns and lack of discoverability for core features. Proprietary, commercial solutions exist but are equally complex, promising a large feature set to justify their value which results in a lot of bloat and a high price tag.

TimeKube focuses on the workflow of creating and organizing backups so that the data for your cluster is never lost and can be found and restored by any developer in your team.

## Features
- Back up the state of your Kubernetes clusters securely to a file or on the cloud (AWS S3)
- Organize and view previously saved backups
- Retrieve backup files for restoring your Kubernetes clusters

## Installation
Start by cloning the repo, then run the scripts to install dependencies and start the app:
```bash
# Example installation steps
git clone https://github.com/oslabs-beta/TimeKube.git
cd TimeKube
npm install
npm run dev
```
Next, open up a browser window and navigate to http://localhost:3000/

## Getting Started
Initial configuration of the app requires creating a `.env` file and adding specific key-value pairs. An example file with relevant keys is included in `.env.example`. See each of the following sections on how to configure features.

## Database Configuration
By default, application data is stored locally in `./appdata/snapshots.db`. However, if you would prefer to host application data on your own database, chase the `DATABASE_URL` key.

### AWS Configuration
AWS S3 backup functionality for files requires entering your `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_REGION`. Refer to [AWS Documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) on how to set up access to your S3 file storage bucket.

```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
```

### Cluster Metrics Visualization
Cluster visualiztion leverages the OpenTelemetry observability framework through Grafana and Prometheus, both of which are required to be deployed in your clusters. Once the pre-requisites are deployed, edit the `GRAFANA_URL` key in the `.env`.

## Basic Usage
Once the database and storage are configured, you can begin using the app to back up your cluster!

### Viewing Clusters
From the navbar, click on "Clusters" to view the list of your clusters, which is inferred from your [kubeconfig](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/). 

### Backing Up Clusters
Backing up clusters can be handled either from "Clusters" or "Backup". Simply choose a cluster and click the button to back up!

### Viewing Backups
From the navbar, select "Snapshots". All the clusters you have valid backups for will be shown. Select a cluster name and you will find your backups listed in chronological order.

![image](https://github.com/oslabs-beta/TimeKube/assets/13823341/0cc2eb79-2106-4d94-9867-87ddbfa0e264)


## The TimeKube Team
|  Developed By         | GitHub                                                                                                                                                  |  LinkedIn                                                                                                                                         |
| :-------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: |
| Bassel Fares          | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/basselfares)          | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/basselfares/)        |
| Chris Martin          | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/IllumihouseDev)       | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chrismartin1023/)    |
| Lucas Ho              | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/luchd)                | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luchd/)              |
| Nassim Chibane        | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nchib)                | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nassimchibane/)      |
| Ryan Sawadichai       | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rswdch)               | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ryan-sawadichai/)    |

## Contributing
Contributions are the foundation of the open-source community. Your contributions help improve our application for developers around the world and are greatly appreciated.

Feel free to fork the project, implement changes, and submit pull requests to help perfect this product and solve problems others might be facing.

If you like what TimeKube is doing, consider starring our project on GitHub. Stars will help boost TimeKube's visibility to developers who may find our product useful or be interested in contributing.

If you notice any bugs or would like to request features, please browse our [Issues page.](https://github.com/oslabs-beta/TimeKube/issues)


## License
TimeKube is developed under the [MIT license](https://en.wikipedia.org/wiki/MIT_License)
