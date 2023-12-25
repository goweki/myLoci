"use client";
import { ButtonPrimary } from "@/components/atoms/buttons";
import { SVGbell } from "@/components/atoms/svgs";

export default function ProductsPage() {
  return (
    <div className="[&>*:not(:last-child)]:mb-2">
      <ButtonPrimary label="Notifications" icon={SVGbell} />
      <ButtonPrimary label="Notifications" icon={SVGbell} variant />
      <ButtonPrimary label="Notifications" icon={SVGbell} noPadding />
      <ButtonPrimary label="Notifications" icon={SVGbell} noPadding variant />
      <ButtonPrimary icon={SVGbell} />
      <ButtonPrimary icon={SVGbell} variant />
      <ButtonPrimary icon={SVGbell} noPadding />
      <ButtonPrimary icon={SVGbell} noPadding variant />
    </div>
  );
}
