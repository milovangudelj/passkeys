-- CreateTable
CREATE TABLE "Post" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" DATE NOT NULL DEFAULT now(),
    "updated_at" DATE NOT NULL DEFAULT now(),
    "published" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "authorId" UUID NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" DATE NOT NULL DEFAULT now(),
    "updated_at" DATE NOT NULL DEFAULT now(),
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
