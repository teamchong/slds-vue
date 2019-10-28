import actionSprite from "@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg";
import customSprite from "@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg";
import doctypeSprite from "@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg";
import standardSprite from "@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg";
import utilitySprite from "@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg";

function svgContent(svg) {
  return String(svg || "").replace(/^.*<svg +[^>]+>|<\/svg>.*$/gi, "");
}
const svgSprites = {
  action: svgContent(actionSprite),
  custom: svgContent(customSprite),
  doctype: svgContent(doctypeSprite),
  standard: svgContent(standardSprite),
  utility: svgContent(utilitySprite)
};

// icon i.e. #photo or standard#photo
export default function svgSprite(icon) {
  const [iconType, iconId] = String(icon || "").split("#");
  const sprite = svgSprites[iconType] || svgSprites.standard;
  return [sprite, '<use xlink:href="#', iconId, '"></use>'].join("");
}
