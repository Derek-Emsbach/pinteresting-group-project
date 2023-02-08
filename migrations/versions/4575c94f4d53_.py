"""empty message

Revision ID: 4575c94f4d53
Revises: 
Create Date: 2023-02-01 22:06:52.952938

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4575c94f4d53'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('boards',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('imageUrl', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('followings_followers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('followedUserId', sa.Integer(), nullable=False),
    sa.Column('followerUserId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['followedUserId'], ['users.id'], ),
    sa.ForeignKeyConstraint(['followerUserId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('pins',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=True),
    sa.Column('save', sa.Boolean(), nullable=True),
    sa.Column('url', sa.String(length=255), nullable=True),
    sa.Column('imageUrl', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('pinnings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('boardId', sa.Integer(), nullable=False),
    sa.Column('pinId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['boardId'], ['boards.id'], ),
    sa.ForeignKeyConstraint(['pinId'], ['pins.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('pinnings')
    op.drop_table('pins')
    op.drop_table('followings_followers')
    op.drop_table('boards')
    op.drop_table('users')
    # ### end Alembic commands ###