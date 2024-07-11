import { ticketSchema } from "@/app/ValidationSchemas/ticket";
import React from "react";
import { Zlib } from "zlib";
import { Form } from "./ui/form";
import { z } from "zod";

type TicketFormData = z.infer<typeof ticketSchema>;

const TicketForm = () => {
  return (
    <div>
      <Form></Form>
    </div>
  );
};

export default TicketForm;
