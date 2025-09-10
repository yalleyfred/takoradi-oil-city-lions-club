import React from "react";
import Form from "./_components/form";
import FormBanner from "./_components/form-banner";

export default function Events() {
  return (
    <section className="flex items-center justify-center gap-14 p-6 lg:px-16 py-24">
      <Form />
      <FormBanner />
    </section>
  );
}
