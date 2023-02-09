"""empty message

Revision ID: 6b1bb531da56
Revises:
Create Date: 2023-02-07 20:55:21.275891

"""
from alembic import op
import sqlalchemy as sa
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

# revision identifiers, used by Alembic.
revision = '6b1bb531da56'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('firstName', sa.String(length=20), nullable=False),
    sa.Column('lastName', sa.String(length=20), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('about', sa.String(length=500), nullable=True),
    sa.Column('image', sa.String(length=20), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username'),
    schema=SCHEMA
    )
    op.create_table('boards',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('imageUrl', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    schema=SCHEMA
    )
    op.create_table('followers',
    sa.Column('follower_id', sa.Integer(), nullable=True),
    sa.Column('followed_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['followed_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['follower_id'], ['users.id'], ),
    schema=SCHEMA
    )
    op.create_table('followings_followers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('followedUserId', sa.Integer(), nullable=False),
    sa.Column('followerUserId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['followedUserId'], ['users.id'], ),
    sa.ForeignKeyConstraint(['followerUserId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    schema=SCHEMA
    )
    op.create_table('pins',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=True),
    sa.Column('save', sa.Boolean(), nullable=True),
    sa.Column('url', sa.String(length=255), nullable=True),
    sa.Column('imageUrl', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    schema=SCHEMA
    )
    op.create_table('pinnings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('boardId', sa.Integer(), nullable=False),
    sa.Column('pinId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['boardId'], ['boards.id'], ),
    sa.ForeignKeyConstraint(['pinId'], ['pins.id'], ),
    sa.PrimaryKeyConstraint('id'),
    schema=SCHEMA
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('pinnings',
    schema=SCHEMA)
    op.drop_table('pins',
    schema=SCHEMA)
    op.drop_table('followings_followers',
    schema=SCHEMA)
    op.drop_table('followers',
    schema=SCHEMA)
    op.drop_table('boards',
    schema=SCHEMA)
    op.drop_table('users',
    schema=SCHEMA)
    # ### end Alembic commands ###
