package db

import "github.com/ncarlier/readflow/pkg/model"

// ArchiverRepository is the repository interface to manage Archivers
type ArchiverRepository interface {
	GetArchiverByID(id uint) (*model.Archiver, error)
	GetArchiverByUserIDAndAlias(uid uint, alias *string) (*model.Archiver, error)
	GetArchiversByUserID(uid uint) ([]model.Archiver, error)
	CreateOrUpdateArchiver(archiver model.Archiver) (*model.Archiver, error)
	DeleteArchiver(archiver model.Archiver) error
	DeleteArchivers(uid uint, ids []uint) (int64, error)
}
