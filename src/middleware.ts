import { type NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
	console.log(new Date().toJSON(), "middleware running");
};
