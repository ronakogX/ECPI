import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { bindings } from "../bindings.server";
const FacultyInput = z.object({ name:z.string().trim().min(2).max(90), subject:z.string().trim().min(2).max(90), qualification:z.string().trim().max(140).default("") });
export const getFaculty = createServerFn({method:"GET"}).handler(async()=>{ const {DB}=bindings(); if(!DB)return []; const result=await DB.prepare("SELECT id,name,subject,qualification FROM faculty ORDER BY id ASC").all<{id:number;name:string;subject:string;qualification:string}>(); return result.results??[]; });
