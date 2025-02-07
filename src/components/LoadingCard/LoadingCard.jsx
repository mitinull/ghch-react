import ContentLoader from "react-content-loader";

export function LoadingCard() {
  return (
    <ContentLoader
      height={280}
      backgroundColor={"#3E7B27"}
      backgroundOpacity={0.35}
      foregroundColor={"#ddd8b2"}
    >
      <rect x="0" y="0" rx="5px" ry="5px" width="100%" height="280" />
    </ContentLoader>
  );
}
