import { NextPage } from 'next';

/**
 * Goal for this page: Have a form element for the user to submit their current grafana service URL, which changes every time the grafana
 * service is deployed. Currently I don't have a way to persist it since the URL changes whenever I spin up minikube and run minikube service grafana-ext
 * So my mindset was: enter the URL into the form, save that URL, and have multiple iframes prepared so that we can then add that URL to the iframe embed and complete them.
 */

const Page: NextPage = async () => {


  return (
    <div>
      <h1>Metrics Visualizer</h1>
      <p>Welcome to the user page!</p>
    <iframe src={process.env.GRAFANA_URL} width="1500" height="750" frameBorder="0"></iframe>
    </div>
  );
};

export default Page;
