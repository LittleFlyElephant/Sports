DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE `tbl_user` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `avatar` VARCHAR(255) DEFAULT NULL,
  `password` VARCHAR(255) NOT NULL,
  `phone` INT(11) DEFAULT NULL,
  `email` VARCHAR(255) DEFAULT NULL,
  `level` INT(11) NOT NULL,
  `exp` INT(11) NOT NULL,
  `permission` INT(2) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deletedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tbl_activity`;
CREATE TABLE `tbl_activity` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `userId` INT(11) NOT NULL,
  `type` INT(2) NOT NULL,
  `price` INT(11) NOT NULL,
  `timeBegin` DATETIME NOT NULL,
  `timeEnd` DATETIME NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `userNums` INT(11) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deletedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY (`userId`),
  FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tbl_circle`;
CREATE TABLE `tbl_circle` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `userId` INT(11) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `userNums` INT(11) NOT NULL,
  `level` INT(11) NOT NULL,
  `exp` INT(11) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deletedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY (`userId`),
  FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tbl_record`;
CREATE TABLE `tbl_record` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userId` INT(11) NOT NULL,
  `step` INT(11) NOT NULL,
  `type` INT(11) NOT NULL,
  `energy` INT(11) NOT NULL,
  `time` DATETIME NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deletedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY (`userId`),
  FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tbl_today`;
CREATE TABLE `tbl_today` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userId` INT(11) NOT NULL,
  `step` INT(11) NOT NULL,
  `type` INT(11) NOT NULL,
  `energy` INT(11) NOT NULL,
  `timeBegin` DATETIME NOT NULL,
  `timeEnd` DATETIME NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deletedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY (`userId`),
  FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tbl_join_activity`;
CREATE TABLE `tbl_join_activity` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userId` INT(11) NOT NULL,
  `activityId` INT(11) NOT NULL,
  `step` INT(11) NOT NULL,
  `expDiff` INT(11) NOT NULL,
  `energy` INT(11) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deletedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY (`userId`),
  KEY (`activityId`),
  FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`activityId`) REFERENCES `tbl_activity`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tbl_activity_comments`;
CREATE TABLE `tbl_activity_comments` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userId` INT(11) NOT NULL,
  `rootId` INT(11) NOT NULL,
  `parentId` INT(11) DEFAULT NULL,
  `type` INT(2) NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deletedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY (`userId`),
  KEY (`rootId`),
  KEY (`parentId`),
  FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`rootId`) REFERENCES `tbl_activity`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`parentId`) REFERENCES `tbl_activity_comments`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tbl_join_circle`;
CREATE TABLE `tbl_join_circle` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userId` INT(11) NOT NULL,
  `circleId` INT(11) NOT NULL,
  `step` INT(11) NOT NULL,
  `expDiff` INT(11) NOT NULL,
  `contri` INT(11) NOT NULL,
  `topicNum` INT(11) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deletedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY (`userId`),
  KEY (`circleId`),
  FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`circleId`) REFERENCES `tbl_circle`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tbl_circle_topic`;
CREATE TABLE `tbl_circle_topic` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userId` INT(11) NOT NULL,
  `circleId` INT(11) NOT NULL,
  `type` INT(2) NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `commentNum` INT(11) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deletedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY (`userId`),
  KEY (`circleId`),
  FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`circleId`) REFERENCES `tbl_circle`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tbl_circle_comments`;
CREATE TABLE `tbl_circle_comments` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userId` INT(11) NOT NULL,
  `rootId` INT(11) NOT NULL,
  `parentId` INT(11) DEFAULT NULL,
  `type` INT(2) NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deletedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY (`userId`),
  KEY (`rootId`),
  KEY (`parentId`),
  FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`rootId`) REFERENCES `tbl_circle_topic`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`parentId`) REFERENCES `tbl_circle_comments`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tbl_fan`;
CREATE TABLE `tbl_fan` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userId` INT(11) NOT NULL,
  `fanId` INT(11) NOT NULL,
  `value` INT(11) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deletedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY (`userId`),
  KEY (`fanId`),
  FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`fanId`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tbl_message`;
CREATE TABLE `tbl_message` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userId` INT(11) NOT NULL,
  `type` INT(2) NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `reply` INT(2) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deletedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY (`userId`),
  FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tbl_news`;
CREATE TABLE `tbl_news` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userId` INT(11) NOT NULL,
  `title` INT(11) NOT NULL,
  `type` INT(2) NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deletedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY (`userId`),
  FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# CREATE TABLE `test1` (
#   `id` INT(11) NOT NULL AUTO_INCREMENT,
#   PRIMARY KEY (`id`)
# ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
#
# DROP TABLE IF EXISTS `test2`;
# CREATE TABLE `test2`(
#   `id` INT(11) NOT NULL AUTO_INCREMENT,
#   `test1_id` INT(11) DEFAULT NULL,
#   PRIMARY KEY (`id`),
#   FOREIGN KEY (`test1_id`) REFERENCES `test1` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
# ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
#
# INSERT INTO `test1` VALUES (1);
# INSERT INTO `test2` VALUES (3, 1);
# DELETE FROM `test1`;
ALTER TABLE tbl_user ADD accessToken VARCHAR(255) DEFAULT NULL;
ALTER TABLE tbl_user ADD deviceId VARCHAR(255) DEFAULT NULL;