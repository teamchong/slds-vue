const actionSprite = require("@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg") as string;
const customSprite = require("@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg") as string;
const doctypeSprite = require("@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg") as string;
const standardSprite = require("@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg") as string;
const utilitySprite = require("@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg") as string;

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
