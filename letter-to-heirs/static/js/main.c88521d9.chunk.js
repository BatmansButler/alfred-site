(this["webpackJsonponboarding-wizard"]=this["webpackJsonponboarding-wizard"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),r=n(16),l=n(104),o=Object({NODE_ENV:"production",PUBLIC_URL:"/letter-to-heirs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).OPENLAW_INSTANCE_NAME,s="https://lib.openlaw.io/api/v1/".concat(o?o.toLowerCase():"default"),c=new l.a(s),u=n(21),d=n(105),m=n(18),p=n(33),h=n(0),f=n(3),g=n(2),v=n(1),y=n(54),T=(n(92),n(106)),b=n(55),E=n(52),x=n(53),_=n(107),w=n(26),O=function(e){var t=e.children,n=e.sectionName,r=e.sectionCount,l=e.index,o=e.activeIndex,s=e.setActiveIndex,c=Object(a.useState)(!0),d=Object(u.a)(c,2),m=d[0],p=d[1],h=l>0,f=l<r-1,g=l===r-1;return i.a.createElement(T.a,{size:"lg",key:"card-".concat(n),"aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:m&&n.length&&l===o,renderTrigger:function(){return i.a.createElement("h2",{className:"sectionTrigger",tabIndex:"0"},"".concat(n))}},i.a.createElement(w.a,null,i.a.createElement(b.a,{id:"contained-modal-title-vcenter"},"".concat(n))),i.a.createElement(E.a,null,t()),i.a.createElement(x.a,null,h&&i.a.createElement(_.a,{variant:"secondary",onClick:function(){return s(o-1)}},"< Previous"),f&&i.a.createElement(_.a,{variant:"primary",onClick:function(){return s(o+1)}},"Next >"),g&&i.a.createElement(_.a,{variant:"primary",onClick:function(){return p(!1)}},"Done")))},D='{"input":{"typeDefinition":{"signerEmail":{"name":"signerEmail","variableTypeDefinition":{"name":"Text","typeParameter":null},"description":null,"formatter":null,"isHidden":false,"defaultValue":null},"contractContentBase64":{"name":"contractContentBase64","variableTypeDefinition":{"name":"Text","typeParameter":null},"description":null,"formatter":null,"isHidden":false,"defaultValue":null},"contractTitle":{"name":"contractTitle","variableTypeDefinition":{"name":"Text","typeParameter":null},"description":null,"formatter":null,"isHidden":false,"defaultValue":null}},"names":["signerEmail","contractContentBase64","contractTitle"],"types":{"signerEmail":{"name":"Text"},"contractContentBase64":{"name":"Text"},"contractTitle":{"name":"Text"}}},"output":{"typeDefinition":{"signerEmail":{"name":"signerEmail","variableTypeDefinition":{"name":"Text","typeParameter":null},"description":null,"formatter":null,"isHidden":false,"defaultValue":null},"signature":{"name":"signature","variableTypeDefinition":{"name":"Text","typeParameter":null},"description":null,"formatter":null,"isHidden":false,"defaultValue":null},"recordLink":{"name":"recordLink","variableTypeDefinition":{"name":"Text","typeParameter":null},"description":null,"formatter":null,"isHidden":false,"defaultValue":null}},"names":["signerEmail","signature","recordLink"],"types":{"signerEmail":{"name":"Text"},"signature":{"name":"Text"},"recordLink":{"name":"Text"}}}}',P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"DocuSign";return Object(m.a)({},e,D)},S='<%\n==What is your name?==\n[[Full Name]]\n\n==Letter Date==\n[[Letter Date: Date]]\n\n==Your Digital Assets==\n[[Digital Asset: Structure(\n  Name: Text;\n  PIN: Text;\n  Backup: Text\n)]]\n[[Digital Asset List: Collection<Digital Asset>]]\n\n\n==Beneficiary Info==\n[[Beneficiary A]]\n\n==Password Manager==\n[[Password Manager]]\n[[Password Helper]]\n\n==Phone Access==\n[[Phone PIN]]\n[[Second Factor App]]\n\n==Financial Institution==\n[[Financial Institution]]\n\n==Hardware Wallet==\n[[Hardware Wallet Type: Text( \n  options: "Ledger", "KeepKey", "Yo Mama"\n  )]]\n[[Hardware Wallet Location]]\n[[Hardware Wallet Website]]\n\n==Other Wallets==\n[[Wallet: Structure(\n  Name: Text;\n  Location: Text;\n  Website: Text\n)]]\n[[#Wallet List: Collection<Wallet>]]\n\n==Liquidation Recommendataions==\n[[Cryptocurrency Exchange Name]]\n\n==Will Metadata==\n[[Will Date: Date]]\n[[Will Location: Text]]\n%>\n\n\\centered **Letter to [[Beneficiary A]] in Regards to my Digital Assets**\n\n\n\n\n\\right-three-quarters [[Letter Date: Date]]\n\n\n\n\nDear [[Beneficiary A]],\n\nThe purpose of this letter is to inform you that I own digital assets that aren\u2019t held or controlled by third parties and provide instructions to be sure that you can access them in the event that I can\u2019t. Please contact [what goes here?] to learn more about my final wishes.\n\nIt\u2019s important to understand that these assets are not held by a bank or other financial institution and it\u2019s highly unlikely that any mistakes made in the course of transferring these assets can be fixed. \n\nDo not perform these actions around individuals you would not be comfortable handing control of the assets over to and take care not to expose backups of the wallet to untrusted 3rd parties.\n\nI use (exchanges) exchanges to trade cryptocurrencies and tokens and there may or may not be assets still held there. Move these assets out of the exchange as quickly as possible to ensure you have full control over the assets. \n\nMy password manager can be found [[Password Manager]] and you can ask [[Password Helper]] for help.\n\nMy phone pin is [[Phone PIN]] and I use [[Second Factor App]] for two-factor authentication.\n\nThis account is connected to my financial institution: [[Financial Institution]].\n\nI use a [[Hardware Wallet Type]] hardware wallet stored in [[Hardware Wallet Location]]. The funds should be accessible from the website at [[Hardware Wallet Website]].\n\n{{#for each wallet: Wallet List =>\n    I also use the [[wallet.Name]] wallet stored on [[wallet.Location]]. You can access this by [[wallet.Website]].\n }}\n\n| Device | Pin | Backup | \n{{#for each digitalAsset: Digital Asset List =>\n    | [[digitalAsset.Name]] | [[digitalAsset.PIN]] | [[digitalAsset.Backup]] |\n}}\n    \nTo liquidate these assets, you\u2019ll need to exchange them for fiat using a digital exchange. I use [[Cryptocurrency Exchange Name]].\n\nThis document is intended to supplement my will and allow these assets to pass either through the intestacy statutes or through a will or trust that has been previously set up. My current will is dated [[Will Date: Date]] and stored [[Will Location]].\n\n\n\n\n\\right-three-quarters __________________________________\n\\right-three-quarters [[Full Name]]\n\\right-three-quarters [[Letter Date: Date]]\n',L=function(e){return"Text"===e.elementType&&"blur"===e.eventType&&"Contestant-Name"===e.elementName&&"Smoky"!==e.value?{errorMessage:'Please, only participants with the name "Smoky" can enter.'}:"Contestant-Picture"===e.elementName&&e.value.file&&!e.value.file.name.includes("smoky-with-beer")?{errorMessage:'Please upload a file with a name that includes "smoky-with-beer"'}:void 0},I=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).compiledTemplate=d.a.compileTemplate(S).compiledTemplate,e.initialExecutionResult=d.a.execute(e.compiledTemplate,{},{},P()).executionResult,e.initialVariables=d.a.getExecutedVariables(e.initialExecutionResult,{}),e.inputExtraTextMap={"Full Name":function(){return i.a.createElement(i.a.Fragment,null,"What's your name, bra?")}},e.state={executionResult:e.initialExecutionResult,parameters:{},variables:e.initialVariables,activeIndex:0},e.onElementChange=function(t,n,a){var i=e.state.parameters;if(void 0===n&&void 0!==i[t]||!a.isError&&n!==i[t]){var r=e.props.stateLifter,l=Object(p.a)(Object(p.a)({},i),{},Object(m.a)({},t,n)),o=d.a.execute(e.compiledTemplate,{},l,P()),s=o.executionResult,c=o.errorMessage;c?console.error("Openlaw Execution Error:",c):e.setState({executionResult:s,parameters:l,variables:d.a.getExecutedVariables(s,{})},(function(){r(e.state)}))}},e.setActiveIndex=function(t){return e.setState({activeIndex:t})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.stateLifter(this.state)}},{key:"SectionsRendererInjecter",value:function(){var e=this.state.activeIndex,t=this.setActiveIndex;return function(n){return i.a.createElement(O,Object.assign({activeIndex:e,setActiveIndex:t},n))}}},{key:"render",value:function(){var e=this.state,t=e.executionResult,n=e.parameters,a=e.variables;return i.a.createElement(i.a.Fragment,null,Object.keys(t).length&&i.a.createElement(i.a.Fragment,null,i.a.createElement(y.a,{apiClient:c,executionResult:t,inputExtraTextMap:this.inputExtraTextMap,parameters:n,onChangeFunction:this.onElementChange,onValidate:L,openLaw:d.a,renderSections:this.SectionsRendererInjecter(),sectionTransform:function(e,t){return{sectionName:e,index:t}},unsectionedTitle:"",variables:a})))}}]),n}(a.Component),A=(n(99),function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(),o=Object(u.a)(l,2),s=o[0],c=o[1],m=Object(a.useState)("source"),p=Object(u.a)(m,2),h=p[0],f=p[1];return Object(a.useEffect)((function(){n&&(!function(e,t){return function(){var n=e.executionResult,a=d.a.getAgreements(n)[0].agreement;t(d.a.renderForPreview(a,{},{}))}}(n,c)(),f("preview"))}),[n]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"paneLeft"},i.a.createElement(I,{stateLifter:r})),i.a.createElement("div",{className:"document-view paper"},s&&"preview"===h&&i.a.createElement("div",{dangerouslySetInnerHTML:{__html:s}})))});n(100);!function(){var e={email:Object({NODE_ENV:"production",PUBLIC_URL:"/letter-to-heirs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).OPENLAW_EMAIL||"",password:Object({NODE_ENV:"production",PUBLIC_URL:"/letter-to-heirs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).OPENLAW_PASSWORD||""};c.login(e.email,e.password).catch((function(e){/500/.test(e)?console.warn("OpenLaw APIClient: Please authenticate to the APIClient if you wish to use the Address input."):console.error("OpenLaw APIClient:",e)}))}(),Object(r.render)(i.a.createElement(A,null),document.getElementById("root"))},56:function(e,t,n){e.exports=n(101)},92:function(e,t,n){},99:function(e,t,n){}},[[56,1,2]]]);
//# sourceMappingURL=main.c88521d9.chunk.js.map