import hljs from "highlight.js/lib/core";
import yaml from 'highlight.js/lib/languages/yaml';
import ClipboardCopy from "@/app/dashboard/cluster/[clusterId]/snapshots/[fileKey]/ClipboardCopy.tsx";

export default function YamlDisplay(props) {
  const fileString = props.fileString;
  hljs.registerLanguage('yaml', yaml);
  const yamlHtml = hljs.highlight(fileString, {language: 'yaml'}).value;
  const yamlHtmlLines = yamlHtml.split('\n');

  return (
    <div className={"mockup-code flex flex-none flex-col justify-end m-2"}>
      {/*<div>*/}
      <div className={"mx-auto"}>
        <ClipboardCopy string={fileString}></ClipboardCopy>
      </div>
      {/*<pre data-prefix={">"}>*/}
      {/*  <code dangerouslySetInnerHTML={{__html: yamlHtml}}/>*/}
      {/*</pre>*/}
      {yamlHtmlLines.map((line, i) => <pre data-prefix={i+1} key={i+1}><code dangerouslySetInnerHTML={{__html: line}}></code></pre>)}
    </div>
  )
}