﻿CREATE TABLE [dbo].[Palindroma]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	[Palabra] VARCHAR(200) NOT NULL,
	[IsPalindroma] BIT NOT NULL
)
