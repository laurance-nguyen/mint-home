"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";
import { submitForm } from "./actions";
import { formSchema } from "./schema";

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      message: "",
    },
  });
  const { toast } = useToast();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await submitForm(data);

    toast(
      response.success
        ? {
            title: "Gửi thành công",
          }
        : {
            title: "Gửi thất bại",
            description: "Vui lòng thử lại.",
            variant: "destructive",
            action: (
              <ToastAction
                altText="Thử lại"
                onClick={form.handleSubmit(onSubmit)}
              >
                Thử lại
              </ToastAction>
            ),
          },
    );
  };

  return (
    <div className="flex flex-col px-6">
      <h1 className="py-14 text-center text-2xl">
        <span className="text-primary">LIÊN HỆ</span> VỚI CHÚNG TÔI
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Tên" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="tel" placeholder="Điện thoại" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Công ty" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormControl>
                  <textarea
                    className="w-full resize-none rounded-md border border-input bg-gray-100 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tin nhắn"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            isLoading={form.formState.isSubmitting}
            type="submit"
            className="float-right"
          >
            Gửi&nbsp;
            <ArrowRightIcon />
          </Button>
        </form>
      </Form>

      <div className="mt-10">
        <div className="mb-5 flex w-full flex-col gap-1">
          <Image width={164} height={35} src="/logo.svg" alt="logo" />
          <p className="text-2xs tracking-widest text-primary">
            PASSION IN HOME DECOR
          </p>
        </div>

        <div className="mb-10 flex w-full flex-col gap-4 text-sm text-muted-foreground">
          <div>
            <p>0906326466</p>
          </div>
          <p>info@minthome.vn</p>
          <p>
            Nguyễn Hữu Cảnh, Quận Bình Thạnh
            <br /> Thành phố Hồ Chí Minh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
