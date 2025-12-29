import OverviewSVG from "../../assets/icons/Overview.svg?react";
import TransactionSVG from "../../assets/icons/Transaction.svg?react";
import BalanceSVG from "../../assets/icons/wallet.svg?react";
import BillSVG from "../../assets/icons/Bill.svg?react";
import ExpenseSVG from "../../assets/icons/Expencces.svg?react";
import GoalSVG from "../../assets/icons/Goal.svg?react";
import SettingSVG from "../../assets/icons/Settings.svg?react";
import DetailSVG from "../../assets/icons/Icon.svg?react";
import ChevronRightSVG from "../../assets/icons/chevrons-right.svg?react";
import LogoutSVG from "../../assets/icons/Icon2.svg?react";

type IconProps = { size?: number; color?: string } & React.SVGProps<SVGSVGElement>;


const createIcon = (SVG: React.FC<any>) => ({ size = 24, color = "currentColor", ...props }) => (
  <SVG width={size} height={size} stroke={color} {...props} />
);

const Icon = {
  Overview: createIcon(OverviewSVG),
  Transaction: createIcon(TransactionSVG),
  Balance: createIcon(BalanceSVG),
  Bill: createIcon(BillSVG),
  Expense: createIcon(ExpenseSVG),
  Goal: createIcon(GoalSVG),
  Setting: createIcon(SettingSVG),
  Detail: createIcon(DetailSVG),
  ChevronRight: createIcon(ChevronRightSVG),
  Logout: createIcon(LogoutSVG),
  ArrowUp: ({ size = 16, color = "#FF5F5F", ...props }) => (
    <span style={{ color, fontSize: size, display: 'inline-flex', alignItems: 'center' }} {...props}>↑</span>
  ),
  ArrowDown: ({ size = 16, color = "#22C55E", ...props }) => (
    <span style={{ color, fontSize: size, display: 'inline-flex', alignItems: 'center' }} {...props}>↓</span>
  ),
};

export default Icon;
