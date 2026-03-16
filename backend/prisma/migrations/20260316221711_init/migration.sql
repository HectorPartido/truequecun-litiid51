-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `foto_perfil` VARCHAR(500) NULL,
    `telefono` VARCHAR(20) NULL,
    `colonia` VARCHAR(150) NULL,
    `ciudad` VARCHAR(100) NOT NULL DEFAULT 'Cancún',
    `bio` TEXT NULL,
    `reputacion_score` DECIMAL(3, 2) NOT NULL DEFAULT 0.00,
    `trueques_completados` INTEGER NOT NULL DEFAULT 0,
    `rol` ENUM('usuario', 'admin') NOT NULL DEFAULT 'usuario',
    `verificado` BOOLEAN NOT NULL DEFAULT false,
    `ine_url` VARCHAR(500) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    INDEX `users_email_idx`(`email`),
    INDEX `users_colonia_idx`(`colonia`),
    INDEX `users_reputacion_score_idx`(`reputacion_score`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categorias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `descripcion` VARCHAR(255) NULL,
    `icono` VARCHAR(50) NULL,
    `activa` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `categorias_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `publicaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_id` INTEGER NOT NULL,
    `categoria_id` INTEGER NOT NULL,
    `titulo` VARCHAR(200) NOT NULL,
    `descripcion` TEXT NOT NULL,
    `tipo` ENUM('objeto', 'servicio') NOT NULL,
    `estado_articulo` ENUM('nuevo', 'seminuevo', 'usado') NULL,
    `que_busca_a_cambio` TEXT NULL,
    `modalidad` ENUM('presencial', 'virtual') NOT NULL DEFAULT 'presencial',
    `disponibilidad_horaria` VARCHAR(255) NULL,
    `estado_publicacion` ENUM('activa', 'pausada', 'cerrada') NOT NULL DEFAULT 'activa',
    `fecha_vigencia` DATE NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `publicaciones_usuario_id_idx`(`usuario_id`),
    INDEX `publicaciones_categoria_id_idx`(`categoria_id`),
    INDEX `publicaciones_tipo_idx`(`tipo`),
    INDEX `publicaciones_estado_publicacion_idx`(`estado_publicacion`),
    INDEX `publicaciones_created_at_idx`(`created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imagenes_publicacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `publicacion_id` INTEGER NOT NULL,
    `url` VARCHAR(500) NOT NULL,
    `orden` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `imagenes_publicacion_publicacion_id_idx`(`publicacion_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `etiquetas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `etiquetas_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `publicacion_etiquetas` (
    `publicacion_id` INTEGER NOT NULL,
    `etiqueta_id` INTEGER NOT NULL,

    PRIMARY KEY (`publicacion_id`, `etiqueta_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pujas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `publicacion_id` INTEGER NOT NULL,
    `usuario_ofertante_id` INTEGER NOT NULL,
    `mensaje` TEXT NULL,
    `estado` ENUM('pendiente', 'ganadora', 'rechazada', 'cancelada') NOT NULL DEFAULT 'pendiente',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `pujas_publicacion_id_idx`(`publicacion_id`),
    INDEX `pujas_usuario_ofertante_id_idx`(`usuario_ofertante_id`),
    INDEX `pujas_estado_idx`(`estado`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `puja_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `puja_id` INTEGER NOT NULL,
    `publicacion_ofrecida_id` INTEGER NULL,
    `descripcion_servicio` TEXT NULL,
    `tipo_oferta` ENUM('publicacion_existente', 'servicio_nuevo') NOT NULL,

    INDEX `puja_items_puja_id_idx`(`puja_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trueques` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `publicacion_id` INTEGER NOT NULL,
    `puja_ganadora_id` INTEGER NOT NULL,
    `usuario_publicador_id` INTEGER NOT NULL,
    `usuario_ofertante_id` INTEGER NOT NULL,
    `estado` ENUM('acordado', 'completado', 'cancelado', 'en_disputa') NOT NULL DEFAULT 'acordado',
    `fecha_acuerdo` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fecha_completado` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `trueques_puja_ganadora_id_key`(`puja_ganadora_id`),
    INDEX `trueques_publicacion_id_idx`(`publicacion_id`),
    INDEX `trueques_estado_idx`(`estado`),
    INDEX `trueques_usuario_publicador_id_idx`(`usuario_publicador_id`),
    INDEX `trueques_usuario_ofertante_id_idx`(`usuario_ofertante_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `calificaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trueque_id` INTEGER NOT NULL,
    `calificador_id` INTEGER NOT NULL,
    `calificado_id` INTEGER NOT NULL,
    `estrellas` TINYINT NOT NULL,
    `comentario` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `calificaciones_calificado_id_idx`(`calificado_id`),
    UNIQUE INDEX `calificaciones_trueque_id_calificador_id_key`(`trueque_id`, `calificador_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mensajes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trueque_id` INTEGER NOT NULL,
    `emisor_id` INTEGER NOT NULL,
    `contenido` TEXT NOT NULL,
    `leido` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `mensajes_trueque_id_idx`(`trueque_id`),
    INDEX `mensajes_created_at_idx`(`created_at`),
    INDEX `mensajes_trueque_id_leido_idx`(`trueque_id`, `leido`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notificaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_id` INTEGER NOT NULL,
    `tipo` ENUM('puja_recibida', 'puja_ganadora', 'puja_rechazada', 'mensaje', 'calificacion', 'recordatorio') NOT NULL,
    `titulo` VARCHAR(200) NOT NULL,
    `contenido` TEXT NULL,
    `url_destino` VARCHAR(500) NULL,
    `leida` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `notificaciones_usuario_id_idx`(`usuario_id`),
    INDEX `notificaciones_usuario_id_leida_idx`(`usuario_id`, `leida`),
    INDEX `notificaciones_created_at_idx`(`created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reportes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reportador_id` INTEGER NOT NULL,
    `usuario_reportado_id` INTEGER NULL,
    `publicacion_reportada_id` INTEGER NULL,
    `tipo` ENUM('usuario', 'publicacion') NOT NULL,
    `motivo` TEXT NOT NULL,
    `estado` ENUM('pendiente', 'revisado', 'resuelto') NOT NULL DEFAULT 'pendiente',
    `resolucion` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `reportes_estado_idx`(`estado`),
    INDEX `reportes_tipo_idx`(`tipo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `publicaciones` ADD CONSTRAINT `publicaciones_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `publicaciones` ADD CONSTRAINT `publicaciones_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `categorias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imagenes_publicacion` ADD CONSTRAINT `imagenes_publicacion_publicacion_id_fkey` FOREIGN KEY (`publicacion_id`) REFERENCES `publicaciones`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `publicacion_etiquetas` ADD CONSTRAINT `publicacion_etiquetas_publicacion_id_fkey` FOREIGN KEY (`publicacion_id`) REFERENCES `publicaciones`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `publicacion_etiquetas` ADD CONSTRAINT `publicacion_etiquetas_etiqueta_id_fkey` FOREIGN KEY (`etiqueta_id`) REFERENCES `etiquetas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pujas` ADD CONSTRAINT `pujas_publicacion_id_fkey` FOREIGN KEY (`publicacion_id`) REFERENCES `publicaciones`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pujas` ADD CONSTRAINT `pujas_usuario_ofertante_id_fkey` FOREIGN KEY (`usuario_ofertante_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `puja_items` ADD CONSTRAINT `puja_items_puja_id_fkey` FOREIGN KEY (`puja_id`) REFERENCES `pujas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `puja_items` ADD CONSTRAINT `puja_items_publicacion_ofrecida_id_fkey` FOREIGN KEY (`publicacion_ofrecida_id`) REFERENCES `publicaciones`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trueques` ADD CONSTRAINT `trueques_publicacion_id_fkey` FOREIGN KEY (`publicacion_id`) REFERENCES `publicaciones`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trueques` ADD CONSTRAINT `trueques_puja_ganadora_id_fkey` FOREIGN KEY (`puja_ganadora_id`) REFERENCES `pujas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trueques` ADD CONSTRAINT `trueques_usuario_publicador_id_fkey` FOREIGN KEY (`usuario_publicador_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trueques` ADD CONSTRAINT `trueques_usuario_ofertante_id_fkey` FOREIGN KEY (`usuario_ofertante_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `calificaciones` ADD CONSTRAINT `calificaciones_trueque_id_fkey` FOREIGN KEY (`trueque_id`) REFERENCES `trueques`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `calificaciones` ADD CONSTRAINT `calificaciones_calificador_id_fkey` FOREIGN KEY (`calificador_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `calificaciones` ADD CONSTRAINT `calificaciones_calificado_id_fkey` FOREIGN KEY (`calificado_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mensajes` ADD CONSTRAINT `mensajes_trueque_id_fkey` FOREIGN KEY (`trueque_id`) REFERENCES `trueques`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mensajes` ADD CONSTRAINT `mensajes_emisor_id_fkey` FOREIGN KEY (`emisor_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notificaciones` ADD CONSTRAINT `notificaciones_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reportes` ADD CONSTRAINT `reportes_reportador_id_fkey` FOREIGN KEY (`reportador_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reportes` ADD CONSTRAINT `reportes_usuario_reportado_id_fkey` FOREIGN KEY (`usuario_reportado_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
