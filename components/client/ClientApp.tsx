/* eslint-disable @next/next/no-img-element */
"use client";
export default function ClientApp() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center ">
			<a
				href="/detail/xp99j3kp4xz4vv?hl=en-us&amp;gl=IN"
				className="product product-square"
			>
				<div className="blur">
					<div className="gradient gradual-blur h-6 "></div>
				</div>

				<div className="img-bg" style={{ background: "'transparent'" }}></div>
				{/* <div className="pulse" easing="ease-out" duration="250" iterations="1"> */}
				<div className="pulse">
					<img
						className="product-image foo"
						width="80"
						height="80"
						alt=""
						loading="lazy"
						src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBfLf9EetALaWlLDJdgfp14Hu0EGkN5LZwwHcqkhqaJAtZlojd5.HVbNlkwWbBbhwYI5pvfY_CXghv1O7y8plnEs-&amp;format=source&amp;w=95"
					/>
				</div>
				<div className="desc">
					<p title="title" className="title text-two-line-overflow">
						Zoom - One Platform to Connect
					</p>

					<div className="rating-price-row   ">
						<div className="rating-element">
							<span className="label" aria-label="Rated 3.8 out of 5.">
								3.8
							</span>
							<span className="label">
								<div
									data-label="Rating"
									data-readonly=""
									data-value="1"
									data-max="1"
									data-tabindex="-1"
									aria-hidden="true"
								></div>
							</span>
						</div>

						<div className="price-badge"></div>
					</div>
				</div>
			</a>
		</main>
	);
}

function App() {
	return (
		<div
			className="product-card"
			data-name="square-card"
			data-part="product-card"
			role="listitem"
			card-index="1"
			collection-size="12"
			telemetry-event-id="ProductCardClicked"
			telemetry-data='{ "itemId": "xp99j3kp4xz4vv", "itemName": "Zoom - One Platform to Connect", "itemType": "Apps", "cardType": "square", "slot": 1, "redirect": false, "type": "product"}'
		>
			<a
				href="/detail/xp99j3kp4xz4vv?hl=en-us&amp;gl=IN"
				className="product product-square "
				data-tabindex="0"
			>
				<div className="blur">
					<div
						className="gradual-blur"
						style={{
							backgroundImage:
								"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBfLf9EetALaWlLDJdgfp14Hu0EGkN5LZwwHcqkhqaJAtZlojd5.HVbNlkwWbBbhwYI5pvfY_CXghv1O7y8plnEs-&amp;format=source&amp;w=95);",
						}}
					></div>
				</div>

				<div className="img-bg" style={{ background: "transparent" }}></div>
				<div
					data-n="sl-animation"
					data-name="pulse"
					data-easing="ease-out"
					data-duration="250"
					data-iterations="1"
				>
					<img
						className="product-image"
						width="80"
						height="80"
						alt=""
						loading="lazy"
						src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBfLf9EetALaWlLDJdgfp14Hu0EGkN5LZwwHcqkhqaJAtZlojd5.HVbNlkwWbBbhwYI5pvfY_CXghv1O7y8plnEs-&amp;format=source&amp;w=95"
					/>
				</div>
				<div className="desc">
					<p data-part="title" className="title text-two-line-overflow">
						Zoom - One Platform to Connect
					</p>

					<div className="rating-price-row   ">
						<div className="rating-element">
							<span className="label" aria-label="Rated 3.8 out of 5.">
								3.8
							</span>
							<span className="label">
								<div
									data-name="sl-rating"
									data-label="Rating"
									sata-readonly=""
									data-value="1"
									data-max="1"
									data-tabindex="-1"
									aria-hidden="true"
								></div>
							</span>
						</div>

						<div datatype="price-badge"></div>
					</div>

					<span role="note" aria-label="Product 1 of 12 selected"></span>
				</div>
			</a>
		</div>
	);
}
