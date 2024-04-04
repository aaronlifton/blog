import { codeToHtml } from "$/lib/highlighter.ts";
import Styles from "$components/styles/LatestCode.module.css";
import { type CodeResults, getCodesFromMdx } from "$util/markdown.ts";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { latestCodes } from "$state/LatestCodeListState";

const LatestCodeList: React.FC = () => {
	const codes = latestCodes.get();
	const codesWithRenderedHtml = codes
		.filter((code) => !!code.lang)
		.map((code) => {
			const html = codeToHtml(code.text, code.lang);
			return {
				...code,
				html,
			};
		});

	return (
		<div
			className={
				"codes-container flex h-auto w-full snap-x snap-mandatory snap-always overflow-auto"
			}
		>
			{codesWithRenderedHtml.map((code, idx: number) => (
				<div className={Styles.code} key={`${idx + 1}-code`}>
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
					{code.text && code.lang && (
						<section
							className={clsx([
								"not-prose",
								"[&_span.highlighted]:bg-[#343434]",
								"[&_div]:",
								"[&_div.highlighted]:bg-[#343434]",
							])}
						>
							<pre className={Styles.pre}>
								<code
									className={clsx("not-prose", Styles.code)}
									// biome-ignore lint: code pulled from astro source
									dangerouslySetInnerHTML={{
										__html: codeToHtml(code.text, code.lang),
									}}
								/>
							</pre>
						</section>
					)}
				</div>
			))}
		</div>
	);
};

export default LatestCodeList;
