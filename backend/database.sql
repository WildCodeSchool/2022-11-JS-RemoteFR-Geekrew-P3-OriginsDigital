-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema origins_digital
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema origins_digital
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `origins_digital` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `origins_digital` ;

-- -----------------------------------------------------
-- Table `origins_digital`.`avatar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `origins_digital`.`avatar` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `icons` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 21
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `origins_digital`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `origins_digital`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `banner` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `origins_digital`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `origins_digital`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `firstname` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `status` VARCHAR(50)  NULL DEFAULT '0',
  `avatar_id` INT NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`, `avatar_id`),
  INDEX `fk_user_avatar_idx` (`avatar_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_avatar`
    FOREIGN KEY (`avatar_id`)
    REFERENCES `origins_digital`.`avatar` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `origins_digital`.`video`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `origins_digital`.`video` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `thumbnail` VARCHAR(255) NOT NULL,
  `duration` TIME NOT NULL,
  `free` TINYINT(1) NOT NULL,
  `category_id` INT NOT NULL,
  `likes` INT NOT NULL,
  `dislikes` INT NOT NULL,
  `author` VARCHAR(255) NOT NULL,
  `url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`, `category_id`),
  INDEX `fk_video_category_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_video_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `origins_digital`.`category` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 37
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `origins_digital`.`favorite`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `origins_digital`.`favorite` (
  `user_id` INT NOT NULL,
  `video_id` INT NOT NULL,
  `date_added` DATE NOT NULL,
  PRIMARY KEY (`user_id`, `video_id`),
  INDEX `fk_user_has_video_video1_idx` (`video_id` ASC) VISIBLE,
  INDEX `fk_user_has_video_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_video_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `origins_digital`.`user` (`id`),
  CONSTRAINT `fk_user_has_video_video1`
    FOREIGN KEY (`video_id`)
    REFERENCES `origins_digital`.`video` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `origins_digital`.`recently_viewed`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `origins_digital`.`recently_viewed` (
  `user_id` INT NOT NULL,
  `video_id` INT NOT NULL,
  `video_category_id` INT NOT NULL,
  `video_tags_id` INT NOT NULL,
  `date_viewed` DATE NOT NULL,
  `timer` TIME NOT NULL,
  PRIMARY KEY (`user_id`, `video_id`, `video_category_id`, `video_tags_id`),
  INDEX `fk_user_has_video_video2_idx` (`video_id` ASC, `video_category_id` ASC, `video_tags_id` ASC) VISIBLE,
  INDEX `fk_user_has_video_user2_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_video_user2`
    FOREIGN KEY (`user_id`)
    REFERENCES `origins_digital`.`user` (`id`),
  CONSTRAINT `fk_user_has_video_video2`
    FOREIGN KEY (`video_id` , `video_category_id`)
    REFERENCES `origins_digital`.`video` (`id` , `category_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `origins_digital`.`tags`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `origins_digital`.`tags` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 51
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `origins_digital`.`video_tags`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `origins_digital`.`video_tags` (
  `video_id` INT NOT NULL,
  `tags_id` INT NOT NULL,
  PRIMARY KEY (`video_id`, `tags_id`),
  INDEX `fk_video_tags_tags1_idx` (`tags_id` ASC) VISIBLE,
  CONSTRAINT `fk_video_tags_tags1`
    FOREIGN KEY (`tags_id`)
    REFERENCES `origins_digital`.`tags` (`id`),
  CONSTRAINT `fk_video_tags_video1`
    FOREIGN KEY (`video_id`)
    REFERENCES `origins_digital`.`video` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
