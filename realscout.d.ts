import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "realscout-advanced-search": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "agent-encoded-id": string;
      };
      "realscout-simple-search": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "agent-encoded-id": string;
      };
      "realscout-office-listings": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "agent-encoded-id": string;
        "sort-order"?: string;
        "listing-status"?: string;
        "property-types"?: string;
        "price-min"?: string;
        "price-max"?: string;
      };
      "realscout-your-listings": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "agent-encoded-id": string;
        "sort-order"?: string;
        "listing-status"?: string;
        "property-types"?: string;
      };
      "realscout-home-value": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "agent-encoded-id": string;
      };
    }
  }
}
