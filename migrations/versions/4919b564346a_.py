"""empty message

Revision ID: 4919b564346a
Revises: 72a24d7559aa
Create Date: 2025-03-25 15:25:38.378490

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4919b564346a'
down_revision = '72a24d7559aa'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_column('is_active')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=True))

    # ### end Alembic commands ###
