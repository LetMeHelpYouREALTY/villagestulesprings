import type { ReactElement } from "react";

import type { Metadata } from "next";

/**
 * Component for adding custom Open Graph meta tags to pages
 * This is useful when you need to add specific OG tags that aren't covered by Next.js metadata API
 */
interface OGMetaTagsProps {
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  siteName?: string;
  locale?: string;
  determiner?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  video?: string;
  videoWidth?: number;
  videoHeight?: number;
  videoType?: string;
  audio?: string;
  audioType?: string;
  localeAlternate?: string[];
  email?: string;
  phoneNumber?: string;
  countryName?: string;
  region?: string;
  latitude?: string;
  longitude?: string;
}

// eslint-disable-next-line complexity -- flat list of independent optional-tag branches, not deeply nested logic
export function OGMetaTags({
  title,
  description,
  url,
  type = "website",
  image,
  imageWidth,
  imageHeight,
  imageAlt,
  siteName = "Las Vegas Real Estate Expert",
  locale = "en_US",
  determiner,
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
  video,
  videoWidth,
  videoHeight,
  videoType,
  audio,
  audioType,
  localeAlternate,
  email,
  phoneNumber,
  countryName,
  region,
  latitude,
  longitude,
}: OGMetaTagsProps) {
  const metaTags: ReactElement[] = [];

  // Basic Open Graph tags
  if (title) metaTags.push(<meta key="og:title" property="og:title" content={title} />);
  if (description) metaTags.push(<meta key="og:description" property="og:description" content={description} />);
  if (url) metaTags.push(<meta key="og:url" property="og:url" content={url} />);
  if (type) metaTags.push(<meta key="og:type" property="og:type" content={type} />);
  if (siteName) metaTags.push(<meta key="og:site_name" property="og:site_name" content={siteName} />);
  if (locale) metaTags.push(<meta key="og:locale" property="og:locale" content={locale} />);
  if (determiner) metaTags.push(<meta key="og:determiner" property="og:determiner" content={determiner} />);

  // Image tags
  if (image) {
    metaTags.push(<meta key="og:image" property="og:image" content={image} />);
    if (imageWidth)
      metaTags.push(<meta key="og:image:width" property="og:image:width" content={imageWidth.toString()} />);
    if (imageHeight)
      metaTags.push(<meta key="og:image:height" property="og:image:height" content={imageHeight.toString()} />);
    if (imageAlt) metaTags.push(<meta key="og:image:alt" property="og:image:alt" content={imageAlt} />);
  }

  // Article-specific tags
  if (publishedTime)
    metaTags.push(<meta key="article:published_time" property="article:published_time" content={publishedTime} />);
  if (modifiedTime)
    metaTags.push(<meta key="article:modified_time" property="article:modified_time" content={modifiedTime} />);
  if (author) metaTags.push(<meta key="article:author" property="article:author" content={author} />);
  if (section) metaTags.push(<meta key="article:section" property="article:section" content={section} />);
  if (tags && tags.length > 0) {
    tags.forEach((tag, index) => {
      metaTags.push(<meta key={`article:tag:${index}`} property="article:tag" content={tag} />);
    });
  }

  // Video tags
  if (video) {
    metaTags.push(<meta key="og:video" property="og:video" content={video} />);
    if (videoWidth)
      metaTags.push(<meta key="og:video:width" property="og:video:width" content={videoWidth.toString()} />);
    if (videoHeight)
      metaTags.push(<meta key="og:video:height" property="og:video:height" content={videoHeight.toString()} />);
    if (videoType) metaTags.push(<meta key="og:video:type" property="og:video:type" content={videoType} />);
  }

  // Audio tags
  if (audio) {
    metaTags.push(<meta key="og:audio" property="og:audio" content={audio} />);
    if (audioType) metaTags.push(<meta key="og:audio:type" property="og:audio:type" content={audioType} />);
  }

  // Locale alternate tags
  if (localeAlternate && localeAlternate.length > 0) {
    localeAlternate.forEach((altLocale, index) => {
      metaTags.push(<meta key={`og:locale:alternate:${index}`} property="og:locale:alternate" content={altLocale} />);
    });
  }

  // Contact information
  if (email) metaTags.push(<meta key="og:email" property="og:email" content={email} />);
  if (phoneNumber) metaTags.push(<meta key="og:phone_number" property="og:phone_number" content={phoneNumber} />);

  // Location information
  if (countryName) metaTags.push(<meta key="og:country_name" property="og:country_name" content={countryName} />);
  if (region) metaTags.push(<meta key="og:region" property="og:region" content={region} />);
  if (latitude) metaTags.push(<meta key="og:latitude" property="og:latitude" content={latitude} />);
  if (longitude) metaTags.push(<meta key="og:longitude" property="og:longitude" content={longitude} />);

  // Add namespace prefix for Open Graph
  metaTags.unshift(<meta key="og-prefix" prefix="og: https://ogp.me/ns#" />);

  return <>{metaTags}</>;
}

/**
 * Twitter Card meta tags component
 */
interface TwitterMetaTagsProps {
  card?: "summary" | "summary_large_image" | "app" | "player";
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  player?: string;
  playerWidth?: number;
  playerHeight?: number;
  appName?: string;
  appIdIphone?: string;
  appIdIpad?: string;
  appIdGoogleplay?: string;
  appUrlIphone?: string;
  appUrlIpad?: string;
  appUrlGoogleplay?: string;
}

// eslint-disable-next-line complexity -- flat list of independent optional-tag branches, not deeply nested logic
export function TwitterMetaTags({
  card = "summary_large_image",
  site,
  creator,
  title,
  description,
  image,
  imageAlt,
  player,
  playerWidth,
  playerHeight,
  appName,
  appIdIphone,
  appIdIpad,
  appIdGoogleplay,
  appUrlIphone,
  appUrlIpad,
  appUrlGoogleplay,
}: TwitterMetaTagsProps) {
  const metaTags: ReactElement[] = [];

  metaTags.push(<meta key="twitter:card" name="twitter:card" content={card} />);

  if (site) metaTags.push(<meta key="twitter:site" name="twitter:site" content={site} />);
  if (creator) metaTags.push(<meta key="twitter:creator" name="twitter:creator" content={creator} />);
  if (title) metaTags.push(<meta key="twitter:title" name="twitter:title" content={title} />);
  if (description) metaTags.push(<meta key="twitter:description" name="twitter:description" content={description} />);
  if (image) metaTags.push(<meta key="twitter:image" name="twitter:image" content={image} />);
  if (imageAlt) metaTags.push(<meta key="twitter:image:alt" name="twitter:image:alt" content={imageAlt} />);

  if (player) {
    metaTags.push(<meta key="twitter:player" name="twitter:player" content={player} />);
    if (playerWidth)
      metaTags.push(<meta key="twitter:player:width" name="twitter:player:width" content={playerWidth.toString()} />);
    if (playerHeight)
      metaTags.push(
        <meta key="twitter:player:height" name="twitter:player:height" content={playerHeight.toString()} />,
      );
  }

  if (appName) {
    metaTags.push(<meta key="twitter:app:name:iphone" name="twitter:app:name:iphone" content={appName} />);
    metaTags.push(<meta key="twitter:app:name:ipad" name="twitter:app:name:ipad" content={appName} />);
    metaTags.push(<meta key="twitter:app:name:googleplay" name="twitter:app:name:googleplay" content={appName} />);

    if (appIdIphone)
      metaTags.push(<meta key="twitter:app:id:iphone" name="twitter:app:id:iphone" content={appIdIphone} />);
    if (appIdIpad) metaTags.push(<meta key="twitter:app:id:ipad" name="twitter:app:id:ipad" content={appIdIpad} />);
    if (appIdGoogleplay)
      metaTags.push(
        <meta key="twitter:app:id:googleplay" name="twitter:app:id:googleplay" content={appIdGoogleplay} />,
      );

    if (appUrlIphone)
      metaTags.push(<meta key="twitter:app:url:iphone" name="twitter:app:url:iphone" content={appUrlIphone} />);
    if (appUrlIpad) metaTags.push(<meta key="twitter:app:url:ipad" name="twitter:app:url:ipad" content={appUrlIpad} />);
    if (appUrlGoogleplay)
      metaTags.push(
        <meta key="twitter:app:url:googleplay" name="twitter:app:url:googleplay" content={appUrlGoogleplay} />,
      );
  }

  return <>{metaTags}</>;
}

/**
 * Combined component for both Open Graph and Twitter meta tags
 */
export function SocialMetaTags({
  ogProps,
  twitterProps,
}: {
  ogProps?: OGMetaTagsProps;
  twitterProps?: TwitterMetaTagsProps;
}) {
  return (
    <>
      {ogProps && <OGMetaTags {...ogProps} />}
      {twitterProps && <TwitterMetaTags {...twitterProps} />}
    </>
  );
}
