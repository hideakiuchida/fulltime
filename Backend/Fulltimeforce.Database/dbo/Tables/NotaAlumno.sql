﻿CREATE TABLE [dbo].[NotaAlumno]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	[Nota] INT NOT NULL,
	[IdAlumno] INT NOT NULL,
	CONSTRAINT [FK_Alumno_Nota] FOREIGN KEY ([Id]) REFERENCES [Alumno]([Id])
)
