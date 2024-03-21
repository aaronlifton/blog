import { type CollectionEntry, getCollection } from "astro:content";
import Styles from "$components/styles/LatestCode.module.css";
import { type CodeResults, getCodesFromMdx } from "$util/markdown.ts";
import { useEffect, useState, useRef } from "react";
import {toHtml} from 'hast-util-to-html'


interface Props {
  codes: CodeResults;
}


const LatestCodeList: React.FC<Props> = ({ codes }) => {
 	return (
		<div
			className={"codes-container flex h-auto w-full snap-x snap-mandatory snap-always overflow-auto"}>
			{codes.map((code, idx: number) => (
				<div className={Styles.code}>
					<div className={Styles.codeHeader}>
						<h2>{code.lang}</h2>
						<div>
							<a href={`/blog/${code.post?.slug}`}>{code.post?.data.title}</a>
						</div>
					</div>
					{/* @ts-ignore */}
					{/*<Code
						code={code.text}
						lang={code.lang}
						className="code-container"
						style="font-size:9px;"
					/>*/}
				</div>
			))}
		</div>
	);
};

export default LatestCodeList; 
