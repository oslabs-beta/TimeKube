"use client"

import Script from "next/script";
import hljs from "highlight.js/lib/core";
import yaml from 'highlight.js/lib/languages/yaml';
const CopyButtonPlugin = require('highlightjs-copy');

export default function YamlDisplay(props) {
  const fileString = props.fileString;
  hljs.registerLanguage('yaml', yaml);
  hljs.addPlugin(new CopyButtonPlugin());
  const yamlHtml = hljs.highlight(fileString, {language: 'yaml'}).value;

  return (
    <div className={"mockup-code"}>
      <pre>
        <code dangerouslySetInnerHTML={{__html: yamlHtml}}/>
      </pre>
    </div>
  )
}